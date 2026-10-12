import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { createServer } from 'vite'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '..')
const distDir = path.join(root, 'dist')

const SEO_START = '<!--seo:start-->'
const SEO_END = '<!--seo:end-->'
const ROOT_PLACEHOLDER = '<div id="root"><!--app-html--></div>'

async function main() {
  const templatePath = path.join(distDir, 'index.html')
  if (!fs.existsSync(templatePath)) {
    throw new Error('dist/index.html not found. Run "vite build" before prerendering.')
  }
  const template = fs.readFileSync(templatePath, 'utf-8')

  const vite = await createServer({
    root,
    server: { middlewareMode: true },
    appType: 'custom',
    logLevel: 'warn'
  })

  try {
    const { render } = await vite.ssrLoadModule('/src/entry-server.jsx')
    const { getRouteMeta, renderHeadTags, PRERENDER_ROUTES } = await vite.ssrLoadModule(
      '/src/seo/routes.js'
    )

    for (const route of PRERENDER_ROUTES) {
      const meta = getRouteMeta(route)
      const appHtml = render(route)
      const head = renderHeadTags(meta)

      let html = template

      if (html.includes(SEO_START) && html.includes(SEO_END)) {
        html = html.replace(
          /<!--seo:start-->[\s\S]*?<!--seo:end-->/,
          `${SEO_START}\n    ${head}\n    ${SEO_END}`
        )
      } else {
        html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${meta.title}</title>`)
      }

      if (html.includes(ROOT_PLACEHOLDER)) {
        html = html.replace(ROOT_PLACEHOLDER, `<div id="root">${appHtml}</div>`)
      } else {
        html = html.replace(/<div id="root">\s*<\/div>/, `<div id="root">${appHtml}</div>`)
      }

      let outDir
      let fileName
      if (route === '/') {
        outDir = distDir
        fileName = 'index.html'
      } else if (route === '/404') {
        outDir = distDir
        fileName = '404.html'
      } else {
        outDir = path.join(distDir, route)
        fileName = 'index.html'
      }

      fs.mkdirSync(outDir, { recursive: true })
      const outPath = path.join(outDir, fileName)
      fs.writeFileSync(outPath, html)
      console.log(`prerendered ${route} -> ${path.relative(root, outPath)}`)
    }
  } finally {
    await vite.close()
  }
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
