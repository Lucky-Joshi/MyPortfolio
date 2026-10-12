import { projects, getProjectBySlug } from '../data/projects'
import {
  SITE,
  HAS_PHOTO,
  SITE_TITLE,
  SITE_DESCRIPTION,
  WHO_IS_LUCKY_JOSHI,
  FAQ_ITEMS
} from '../data/site'

const PERSON_ID = `${SITE.url}/#person`
const WEBSITE_ID = `${SITE.url}/#website`

const KNOWS_ABOUT = [
  'React',
  'Node.js',
  'Express.js',
  'MongoDB',
  'PostgreSQL',
  'JavaScript',
  'TypeScript',
  'Python',
  'Django',
  'Tailwind CSS',
  'REST APIs',
  'Data Structures and Algorithms',
  'HTML5 Canvas',
  'Machine Learning'
]

export function normalizePath(pathname = '/') {
  if (!pathname) return '/'
  let path = pathname.split('#')[0].split('?')[0]
  if (!path.startsWith('/')) path = `/${path}`
  if (path.length > 1 && path.endsWith('/')) path = path.slice(0, -1)
  return path || '/'
}

export function absoluteUrl(path) {
  return `${SITE.url}${path === '/' ? '/' : path}`
}

function personNode() {
  return {
    '@type': 'Person',
    '@id': PERSON_ID,
    name: SITE.name,
    url: SITE.url,
    jobTitle: SITE.jobTitle,
    description: WHO_IS_LUCKY_JOSHI,
    email: `mailto:${SITE.email}`,
    image: absoluteUrl(HAS_PHOTO ? SITE.photo : SITE.previewImage),
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Delhi',
      addressRegion: 'Delhi',
      addressCountry: 'IN'
    },
    knowsAbout: KNOWS_ABOUT,
    sameAs: [SITE.github, SITE.linkedin]
  }
}

function websiteNode() {
  return {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    name: 'Lucky Joshi Portfolio',
    url: SITE.url,
    description: SITE_DESCRIPTION,
    inLanguage: 'en',
    publisher: { '@id': PERSON_ID }
  }
}

function projectSchemaNode(project, position) {
  return {
    '@type': 'ListItem',
    position,
    item: {
      '@type': ['CreativeWork', 'SoftwareSourceCode'],
      '@id': `${SITE.url}/projects/${project.slug}#project`,
      name: project.title,
      description: project.summary,
      url: absoluteUrl(`/projects/${project.slug}`),
      image: absoluteUrl(project.image),
      codeRepository: project.codeUrl,
      programmingLanguage: project.stack,
      dateCreated: project.year,
      author: { '@id': PERSON_ID },
      sameAs: project.liveUrl
    }
  }
}

function faqNode() {
  return {
    '@type': 'FAQPage',
    '@id': `${SITE.url}/#faq`,
    mainEntity: FAQ_ITEMS.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer
      }
    }))
  }
}

function homeMeta() {
  const profilePage = {
    '@type': 'ProfilePage',
    '@id': `${SITE.url}/#profilepage`,
    url: SITE.url,
    name: SITE_TITLE,
    description: SITE_DESCRIPTION,
    isPartOf: { '@id': WEBSITE_ID },
    about: { '@id': PERSON_ID },
    mainEntity: { '@id': PERSON_ID },
    dateModified: SITE.lastUpdated,
    inLanguage: 'en'
  }

  const projectsList = {
    '@type': 'ItemList',
    '@id': `${SITE.url}/#projects`,
    name: 'Projects by Lucky Joshi',
    itemListElement: projects.map((project, index) => projectSchemaNode(project, index + 1))
  }

  return {
    path: '/',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    canonical: SITE.url,
    ogType: 'website',
    ogImage: absoluteUrl(SITE.previewImage),
    ogImageAlt: 'Lucky Joshi full stack MERN developer and AI intern portfolio preview',
    robots: 'index, follow, max-image-preview:large, max-snippet:-1',
    jsonLd: {
      '@context': 'https://schema.org',
      '@graph': [personNode(), websiteNode(), profilePage, projectsList, faqNode()]
    }
  }
}

function projectMeta(project) {
  const path = `/projects/${project.slug}`
  const canonical = absoluteUrl(path)
  const title = project.metaTitle || `${project.title} | Lucky Joshi`
  const description = project.metaDescription || project.summary

  const webPage = {
    '@type': 'WebPage',
    '@id': `${canonical}#webpage`,
    url: canonical,
    name: title,
    description,
    isPartOf: { '@id': WEBSITE_ID },
    about: { '@id': `${canonical}#project` },
    primaryImageOfPage: absoluteUrl(project.image),
    datePublished: project.year,
    dateModified: SITE.lastUpdated,
    breadcrumb: { '@id': `${canonical}#breadcrumb` },
    inLanguage: 'en'
  }

  const breadcrumb = {
    '@type': 'BreadcrumbList',
    '@id': `${canonical}#breadcrumb`,
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
      { '@type': 'ListItem', position: 2, name: 'Projects', item: `${SITE.url}/#projects` },
      { '@type': 'ListItem', position: 3, name: project.title, item: canonical }
    ]
  }

  const projectNode = {
    '@type': ['CreativeWork', 'SoftwareSourceCode'],
    '@id': `${canonical}#project`,
    name: project.title,
    description: project.summary,
    url: canonical,
    image: absoluteUrl(project.image),
    codeRepository: project.codeUrl,
    programmingLanguage: project.stack,
    dateCreated: project.year,
    author: { '@id': PERSON_ID },
    sameAs: project.liveUrl
  }

  return {
    path,
    title,
    description,
    canonical,
    ogType: 'article',
    ogImage: absoluteUrl(project.image),
    ogImageAlt: project.imageAlt,
    robots: 'index, follow, max-image-preview:large, max-snippet:-1',
    jsonLd: {
      '@context': 'https://schema.org',
      '@graph': [personNode(), websiteNode(), webPage, breadcrumb, projectNode]
    }
  }
}

function notFoundMeta() {
  const path = '/404'
  const canonical = absoluteUrl(path)
  return {
    path,
    title: 'Page not found | Lucky Joshi',
    description:
      'The page you are looking for does not exist. Browse the projects and portfolio of Lucky Joshi, full stack MERN and AI developer.',
    canonical,
    ogType: 'website',
    ogImage: absoluteUrl(SITE.previewImage),
    ogImageAlt: 'Lucky Joshi full stack MERN developer and AI intern portfolio preview',
    robots: 'noindex, follow',
    jsonLd: {
      '@context': 'https://schema.org',
      '@graph': [
        personNode(),
        websiteNode(),
        {
          '@type': 'WebPage',
          '@id': `${canonical}#webpage`,
          url: canonical,
          name: 'Page not found',
          isPartOf: { '@id': WEBSITE_ID }
        }
      ]
    }
  }
}

export function getRouteMeta(pathname) {
  const path = normalizePath(pathname)
  if (path === '/') return homeMeta()

  const match = path.match(/^\/projects\/([^/]+)$/)
  if (match) {
    const project = getProjectBySlug(match[1])
    if (project) return projectMeta(project)
  }

  return notFoundMeta()
}

function escapeAttr(value) {
  return String(value).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

export function renderHeadTags(meta) {
  const tags = [
    `<title>${escapeAttr(meta.title)}</title>`,
    `<meta name="description" content="${escapeAttr(meta.description)}" />`,
    `<meta name="robots" content="${escapeAttr(meta.robots)}" />`,
    `<link rel="canonical" href="${escapeAttr(meta.canonical)}" />`,
    `<meta property="og:title" content="${escapeAttr(meta.title)}" />`,
    `<meta property="og:description" content="${escapeAttr(meta.description)}" />`,
    `<meta property="og:url" content="${escapeAttr(meta.canonical)}" />`,
    `<meta property="og:type" content="${escapeAttr(meta.ogType)}" />`,
    `<meta property="og:image" content="${escapeAttr(meta.ogImage)}" />`,
    `<meta property="og:image:alt" content="${escapeAttr(meta.ogImageAlt)}" />`,
    `<meta property="og:site_name" content="${escapeAttr('Lucky Joshi Portfolio')}" />`,
    `<meta property="og:locale" content="${escapeAttr(SITE.locale)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${escapeAttr(meta.title)}" />`,
    `<meta name="twitter:description" content="${escapeAttr(meta.description)}" />`,
    `<meta name="twitter:image" content="${escapeAttr(meta.ogImage)}" />`,
    `<meta name="twitter:image:alt" content="${escapeAttr(meta.ogImageAlt)}" />`
  ]

  const json = JSON.stringify(meta.jsonLd).replace(/</g, '\\u003c')
  tags.push(`<script type="application/ld+json" data-seo="route">${json}</script>`)
  return tags.join('\n    ')
}

export const PRERENDER_ROUTES = ['/', ...projects.map((project) => `/projects/${project.slug}`), '/404']
