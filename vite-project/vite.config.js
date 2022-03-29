import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { viteMockServe } from 'vite-plugin-mock'
import path from 'path'

export default defineConfig(({ command, mode }) => {
  // console.log(command, mode, 99)
  if (command === 'serve') {
    // 开发环境command的值为serve
  } else {
    // 生产环境command的值为build
  }
  return {
    plugins: [vue(), viteMockServe({ supportTs: false })],
    resolve: {
      // 配置快捷路径
      alias: {
        '@': path.resolve(__dirname, 'src'),
        'apis': path.resolve(__dirname, 'src/apis'),
        'comps': path.resolve(__dirname, 'src/components'),
        'views': path.resolve(__dirname, 'src/views'),
        'vue-i18n': 'vue-i18n/dist/vue-i18n.cjs.js'
      }
    }
  }
})
