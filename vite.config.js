import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Vite configuration. The Tailwind plugin lets us use Tailwind v4 with a
// CSS-first setup (see src/index.css) — no separate tailwind.config.js needed.
export default defineConfig({
  plugins: [react(), tailwindcss()],
})
