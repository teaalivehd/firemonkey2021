import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/firemonkey2021/',
  // base: '/',
  plugins: [vue()]
})
