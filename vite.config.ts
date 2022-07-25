import { defineConfig, } from 'vite';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: 'es2015',
    lib: {
      entry: path.resolve(__dirname, 'src/lib/main.ts'),
      name: 'rtfc_utils',
      fileName: (format) => `rtfc_utils.${format}.js`,
      formats: ['es', 'umd'],
    },
    /**
     * vite在library模式下不支持babel, 所以需要自己实现babel+minify工作流(禁用vite压缩, 使用babel-preset-minify)
     * @description @vitejs/plugin-legacy does not support library mode
     * @see {@link https://github.com/vitejs/vite/issues/1639}
     */
    minify: false,
  },
});