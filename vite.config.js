// 这几行的意思是：把 React 插件挂到 Vite 上。
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
});
// 到这里，Vite 就能看懂 React 代码了。