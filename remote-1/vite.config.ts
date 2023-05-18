import { defineConfig } from 'vite'

import react from '@vitejs/plugin-react'

/**
 * Module Federation Import
 */
import ModuleFederation from '@originjs/vite-plugin-federation';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 4001,
  },
  preview: {
    port: 4001,
    strictPort: true,
  },
  plugins: [
    ModuleFederation({
      name: 'experience_app',
      filename: 'remoteEntry.js',
      // modules to expose -> ideally just one high-level App.tsx component
      exposes: {
        './Bootstrap': './src/App.tsx',
      },
      shared: [
        'react',
        'react-dom'
      ],
    }),
    react(),
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  }
})
