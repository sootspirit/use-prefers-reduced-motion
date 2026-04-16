import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';
import dts from 'unplugin-dts/vite';

export default defineConfig({
  plugins: [
    react(),
    dts({
      include: ['src/lib'],
      tsconfigPath: './tsconfig.lib.json',
      insertTypesEntry: true,
      copyDtsFiles: true,
    }),
  ],
  build: {
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, 'src/lib/main.ts'),
      formats: ['es'],
    },
  },
});
