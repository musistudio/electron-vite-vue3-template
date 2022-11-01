import { defineConfig } from 'vite'
import { builtinModules } from 'module'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  root: path.resolve('./src/renderer'),
  base: './',
  build: {
    outDir: '../../dist/renderer',
    rollupOptions: {
      output: {
        format: 'cjs',
      },
      external: [
        'electron',
        ...builtinModules,
      ],
    },
  },
  optimizeDeps: {
    exclude: ['electron'],
  },
  mode: 'development',
  plugins: [vue()]
})
