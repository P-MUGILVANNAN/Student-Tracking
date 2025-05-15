import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['date-fns'],
    exclude: ['date-fns/esm'] // Add this if you're still having issues
  }
})

