import { defineConfig } from 'vite'
import rollupNodePolyFill from 'rollup-plugin-node-polyfills'
import config from './vite.config.js'

// https://vitejs.dev/config/
export default defineConfig({
  ...config,
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    sourcemap: true,
    rollupOptions: {
      plugins: [
        rollupNodePolyFill(),
      ],
    },
    lib: {
      entry: 'index.ts',
      name: 'spex',
      fileName: 'spex'
    }
  },
})
