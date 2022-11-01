import { build } from 'vite'


await build({
  configFile: 'build/renderer.vite.config.ts',
  mode: 'production',
})

await build({
  configFile: 'build/main.vite.config.ts',
  mode: 'production'
})