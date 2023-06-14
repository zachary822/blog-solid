import solid from "solid-start/vite";
import { defineConfig } from "vite";
import vercel from "solid-start-vercel";

export default defineConfig({
  plugins: [solid({ adapter: vercel({ edge: true }) })],
  server: {
    strictPort: true,
    hmr: {
      timeout: 30000,
    },
  },
});
