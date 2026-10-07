import { cpSync, existsSync, readdirSync, unlinkSync } from 'node:fs'
import { join, resolve } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const staticFiles = [
  'resume.html',
  'googlefee5e33e88711b62.html',
  'manifest.json',
  'robots.txt',
  'sitemap.xml',
  '_headers',
  'icon-192.png',
  'icon-512.png',
  'apple-touch-icon.png',
  'preview.png',
  'devflow.png',
  'mentixo.png',
  'periodic-game.png',
  'spyderman-game.png',
  'Lucky Joshi - Resume.pdf'
]

const orphanPrefixes = ['manifest-', 'icon-192-', 'apple-touch-icon-']

function copyStaticAssets() {
  return {
    name: 'copy-static-assets',
    apply: 'build',
    closeBundle() {
      for (const file of staticFiles) {
        if (existsSync(file)) {
          cpSync(file, resolve('dist', file))
        }
      }

      const assetsDir = resolve('dist', 'assets')
      if (existsSync(assetsDir)) {
        for (const file of readdirSync(assetsDir)) {
          if (orphanPrefixes.some((prefix) => file.startsWith(prefix))) {
            unlinkSync(join(assetsDir, file))
          }
        }
      }
    }
  }
}

function preserveStaticHtmlLinks() {
  return {
    name: 'preserve-static-html-links',
    apply: 'build',
    transformIndexHtml: {
      order: 'post',
      handler(html) {
        return html
          .replace(/<link rel="sitemap"[^>]*>/, '<link rel="sitemap" type="application/xml" href="/sitemap.xml" />')
          .replace(/<link rel="manifest" href="[^"]*"\s*\/?>/, '<link rel="manifest" href="/manifest.json" />')
          .replace(/<link rel="icon" type="image\/png" sizes="192x192" href="[^"]*"\s*\/?>/, '<link rel="icon" type="image/png" sizes="192x192" href="/icon-192.png" />')
          .replace(/<link rel="apple-touch-icon" sizes="180x180" href="[^"]*"\s*\/?>/, '<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />')
      }
    }
  }
}

export default defineConfig({
  plugins: [react(), preserveStaticHtmlLinks(), copyStaticAssets()]
})
