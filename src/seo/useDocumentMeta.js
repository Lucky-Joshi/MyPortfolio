import { useEffect } from 'react'

function upsertMeta(attr, key, content) {
  if (content == null || content === '') return
  let el = document.head.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function upsertLink(rel, href) {
  let el = document.head.querySelector(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

export function useDocumentMeta(meta) {
  useEffect(() => {
    if (typeof document === 'undefined') return

    document.title = meta.title

    upsertMeta('name', 'description', meta.description)
    upsertMeta('name', 'robots', meta.robots)
    upsertLink('canonical', meta.canonical)

    upsertMeta('property', 'og:title', meta.title)
    upsertMeta('property', 'og:description', meta.description)
    upsertMeta('property', 'og:url', meta.canonical)
    upsertMeta('property', 'og:type', meta.ogType)
    upsertMeta('property', 'og:image', meta.ogImage)
    upsertMeta('property', 'og:image:alt', meta.ogImageAlt)

    upsertMeta('name', 'twitter:title', meta.title)
    upsertMeta('name', 'twitter:description', meta.description)
    upsertMeta('name', 'twitter:image', meta.ogImage)
    upsertMeta('name', 'twitter:image:alt', meta.ogImageAlt)

    let script = document.head.querySelector('script[data-seo="route"]')
    if (!script) {
      script = document.createElement('script')
      script.setAttribute('type', 'application/ld+json')
      script.setAttribute('data-seo', 'route')
      document.head.appendChild(script)
    }
    script.textContent = JSON.stringify(meta.jsonLd)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [meta.path])
}
