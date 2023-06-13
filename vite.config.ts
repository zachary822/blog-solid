import netlify from "solid-start-netlify";
import solid from "solid-start/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [solid({ adapter: netlify({ edge: true }) })],
  server: {
    strictPort: true,
    hmr: {
      timeout: 30000,
    },
  },
});
