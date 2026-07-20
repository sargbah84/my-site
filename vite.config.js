import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    // Match Create React App's output directory so existing deploy config works.
    outDir: 'build',
  },
});
