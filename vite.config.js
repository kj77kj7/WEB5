import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/web5/", // ⚠️ 레포 이름 정확히 넣기!!
});
