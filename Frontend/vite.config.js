import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  // Vite serves the dev server at port 3000 to match the old CRA default.
  // (Defaults to 5173 otherwise.)
  server: {
    port: 3000,
    open: true, // open the browser automatically on `npm run dev`
  },

  preview: {
    port: 3000,
  },

  build: {
    // Vite's default output dir is `dist/` (CRA used `build/`).
    // Update Netlify's publish dir to `Frontend/dist`.
    outDir: 'dist',

    // Source maps in production help with error tracking; small bundle so cheap.
    sourcemap: false,

    // Increase chunk-size warning threshold a bit — our app has glass CSS
    // bundled together which trips the default 500kb warning unnecessarily.
    chunkSizeWarningLimit: 700,
  },

  // No need to add esbuild loader for `.js` containing JSX —
  // we renamed all JSX-containing files to `.jsx` already.
});
