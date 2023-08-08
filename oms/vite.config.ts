import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server:{
    host:'0.0.0.0',
    port: 8066,
    open: true,
    headers: {
      "Access-Control-Allow-Origin":  "*",
    }
  },
  resolve: {
    // 配置别名
    alias: {
      '@': path.resolve(__dirname, 'src'),
    }
  },
})
