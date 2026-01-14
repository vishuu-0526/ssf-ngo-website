// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import tailwindcss from '@tailwindcss/vite'
// <<<<<<< HEAD
// import router from "@tanstack/router-plugin/vite";

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react(),tailwindcss(),router()],
// =======
// import { TanStackRouterVite } from '@tanstack/router-plugin/vite'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [TanStackRouterVite(), react(), tailwindcss()],
// >>>>>>> e20eac0 (Updated Website UI and content)
// })

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173
  }
})


