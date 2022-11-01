import { createServer, build } from 'vite'
import electron from 'electron'
import { spawn } from 'child_process'

const server = await createServer({
  configFile: 'build/renderer.vite.config.ts',
  mode: 'development'
})
await server.listen()
const url = server.resolvedUrls.local[0]


let electronProcess = null
await build({
  configFile: 'build/main.vite.config.ts',
  build: {
    watch: {},
  },
  plugins: [{
    name: 'electron-starter',
    writeBundle() {
      if (electronProcess) {
        electronProcess.kill()
      }
      electronProcess = spawn(
        electron, ['.'],
        {
          stdio: 'inherit',
          env: {
            NODE_ENV: 'development',
            URL: url
          }
        },
      )
    },
  }],
})