import { defineConfig } from 'vite'
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  root: 'src',
  plugins: [
    vue(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'SPEX',
        theme_color: '#35363a',
        icons: [
          {
            src: '/img/icons/favicon.svg',
            sizes: 'any',
            type: 'image/svg+xml',
          },
          {
            src: '/img/icons/favicon-32x32.png',
            sizes: '32x32',
            type: 'image/png',
          },
          {
            src: '/img/icons/favicon-16x16.png',
            sizes: '16x16',
            type: 'image/png',
          },
          {
            src: '/img/icons/apple-touch-icon.png',
            sizes: 'any',
            type: 'image/png',
          },
          {
            src: '/img/icons/safari-pinned-tab.svg',
            sizes: 'any',
            type: 'image/svg+xml',
          },
          {
            src: '/img/icons/msapplication-icon-144x144.png',
            sizes: '144x144',
            type: 'image/png',
          },
        ],
      }
    })
  ],
  define: {
    global: 'window',
    'process.env': {
      NODE_ENV: JSON.stringify(process.env.NODE_ENV),
    }
  },
  resolve: {
    alias: {
      stream: 'readable-stream',
    },
  },
  optimizeDeps: {
    esbuildOptions: {
      plugins: [
        NodeGlobalsPolyfillPlugin({
          process: true,
          buffer: true,
        }),
      ],
    },
    include: ['dagre'],
  },
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  }
})
