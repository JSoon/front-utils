import { defineConfig } from 'vite'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: 'es2015',
    lib: {
      entry: path.resolve(__dirname, 'src/lib/main.ts'),
      name: 'rtfc_utils',
      fileName: (format) => `rtfc_utils.${format}.js`,
      formats: ['es', 'umd']
    },
    // 禁用vite压缩, 使用babel-preset-minify
    minify: false
  },
})