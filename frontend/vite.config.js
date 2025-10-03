import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',   // чтобы контейнер слушал извне
    port: 3000,
    proxy: {
      '/api': 'http://myapp-backend:8080', // имя backend-сервиса из docker-compose
    },
  },
})
