import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// 레포 이름이 my-project 라고 가정
export default defineConfig({
  base: '/WEB5/',
  plugins: [react()],
})
