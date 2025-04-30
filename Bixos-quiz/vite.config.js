
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 3000,
    strictPort: true,
    allowedHosts: ['4207a8d8-3a95-490d-8688-b28796f461db-00-1x595ctwifvkz.riker.replit.dev', 'all']
  base: "./", // <- necessário para builds relativas
  plugins: [react()],
  }
});
