import { builtinModules } from 'module'
import path from 'path'

export default {
  root: path.resolve('./src/main'),
  build: {
    outDir: '../../dist/main',
    lib: {
      entry: 'main.ts',
      formats: ['cjs'],
      fileName: () => '[name].js',
    },
    rollupOptions: {
      external: [
        'electron',
        ...builtinModules,
      ],
    },
  },
}
