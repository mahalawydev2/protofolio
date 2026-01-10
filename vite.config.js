import path from "path"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['react', 'react-dom'],
          'framer': ['framer-motion'],
          'icons': ['react-icons'],
        },
      },
    },
    cssCodeSplit: true,
    sourcemap: false,
  },
  optimizeDeps: {
    include: ['framer-motion', 'react-icons', 'react-type-animation'],
  },
  css: {
    devSourcemap: false,
  },
})