import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// Served from a GitHub Pages project sub-path: username.github.io/my-portfolio/
export default defineConfig({
  base: '/my-portfolio/',
  plugins: [react(), tailwindcss()],
});
