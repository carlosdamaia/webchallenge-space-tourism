import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  build: {
    sourcemap: false
  },
  plugins: [react()],
  resolve: {
    alias: {
      src: path.resolve(__dirname, './src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "src/styles/variables" as *;
          @use "src/styles/mixins" as *;
        `
      }
    }
  }
})