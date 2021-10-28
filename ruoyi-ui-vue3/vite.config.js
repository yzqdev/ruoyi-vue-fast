// vite.config.js
import { createVuePlugin } from 'vite-plugin-vue2'
import path from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    port: 80
  },
  plugins: [
    createVuePlugin(/* options */{jsx:true})
  ], resolve: {
    extensions: ['.vue', '.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'],
    alias: {
      // vue2项目别名一般都是@，vue3中一般使用/@/, 为方便使用
      '@': path.resolve('src')
    }
  }
})
