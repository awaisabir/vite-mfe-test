import { defineConfig } from 'vite'

import react from '@vitejs/plugin-react'

/**
 * Module Federation Import
 */
import ModuleFederation from '@originjs/vite-plugin-federation';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 4000,
  },
  preview: {
    port: 4000,
    strictPort: true,
  },
  plugins: [
    react(),
    ModuleFederation({
      name: 'app',
      remotes: {
        ExperienceApp: 'http://localhost:4001/assets/remoteEntry.js'
      },
      shared: [
        'react',
        'react-dom'
      ]
    })
  ],
  build: {
    target: 'esnext'
  }
})
