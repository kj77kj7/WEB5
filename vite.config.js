import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/web5/',   // 레포 이름 그대로 적기
  plugins: [react()],
})
