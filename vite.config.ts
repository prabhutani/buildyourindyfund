import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';
import alias from '@rollup/plugin-alias';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), alias()],
  resolve: {
    alias: {
      app: path.resolve(__dirname, 'src'),
    },
  },
  server: { port: 4000 },
  base: 'buildyourindyfund',
});
