import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import { resolve } from 'node:path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    dts({
      tsconfigPath: './tsconfig.app.json',
      cleanVueFileName: true,
      rollupTypes: true,
    }),
  ],
  build: {
    lib: {
      entry: resolve(import.meta.dirname, 'src/main.ts'),
      name: 'VueSortableTree',
      fileName: 'vue-sortable-tree',
    },
    rollupOptions: {
      external: ['vue', 'sortablejs'],
      output: {
        globals: {
          vue: 'Vue',
          sortablejs: 'Sortable',
        },
      },
    },
  },
})
