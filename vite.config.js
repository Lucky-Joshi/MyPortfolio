import fs from 'node:fs'
import path from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const hasPhoto = fs.existsSync(path.resolve(process.cwd(), 'public/lucky-joshi.jpg'))

export default defineConfig({
  plugins: [react()],
  define: {
    __HAS_PHOTO__: JSON.stringify(hasPhoto)
  }
})
