import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve, extname, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import dts from 'unplugin-dts/vite';
import { globSync } from 'glob';

export default defineConfig({
  plugins: [
    react(),
    dts({
      include: ['src/'],
      tsconfigPath: './tsconfig.lib.json',
      insertTypesEntry: true,
      copyDtsFiles: true,
    }),
  ],
  build: {
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, 'src/main.ts'),
      formats: ['es'],
    },
    rolldownOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      input: Object.fromEntries(
        globSync(['src/main.ts', 'src/**/*.{ts,tsx}']).map((file: string) => [
          relative('src', file.slice(0, file.length - extname(file).length)),
          fileURLToPath(new URL(file, import.meta.url)),
        ]),
      ),
      output: {
        entryFileNames: '[name].js',
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'jsxRuntime',
        },
      },
    },
  },
});
