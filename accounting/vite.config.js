import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    proxy: {
      '/api/save': {
        target: 'http://localhost:3000/api/save',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/save/, ''),
      },
      '/api/data': {
        target: 'http://localhost:3000/api/data',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/data/, ''),
      },
    },
  },
})
