import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Change '/switchback/' to '/' if deploying to root of domain
  base: '/switchback/',
})
