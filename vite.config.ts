import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0", // Penting untuk Docker!
    port: 3004,
    allowedHosts: ["roxy.albaeud.cyou"], // Tambahkan domain Anda di sini
  },
});
