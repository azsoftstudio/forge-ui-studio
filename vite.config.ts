import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/forge-ui-studio/', // 👈 IMPORTANT: this matches your GitHub repo name
  plugins: [react()],
})
