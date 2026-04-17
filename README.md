1. create blank React + Typescript template

```
npm create vite@latest
```

2. Immediataly commit the blank project to seperate vite code from mine
3. Add .nvmrc with Node version and commit it
4. Install prettier `nom i -D prettier` and add .prettierrc
5. divide src to demo and lib file. Demo is for testing components.
6. vite library mode: vite.config.ts, add tsconfig.lib.json, update build script & and prepublish script in package.json, update tsconfig.app.json
7. Building types. We need to use a library unplugin-dts:
   - `npm i -D unplugin-dts`
     in vite.config.ts:
     `import dts from "unplugin-dts/vite";`
     ```
     plugins: [
     react(),
     dts({
     include: ["src/lib"],
     tsconfigPath: "./tsconfig.lib.json",
     insertTypesEntry: true,
     copyDtsFiles: true,
     }),
     ],
     ```
8. Add some test components and in vite.config.js add rollupOptions with external and output.global
9. add some styles - SCSS `npm i -D sass-embedded`, no CSS modules, vite-plugin-lib-inject-css:
   The libInjectCSS plugin generates a separate CSS file for each chunk and includes an import statement at the beginning of each chunk's output file.
   - create modules in vite.config.ts - rollupOptions.input
   - change entryFileNames in vite-config to preserve files names
10. update package.json (see commits)

[https://dev.to/receter/how-to-create-a-react-component-library-using-vites-library-mode-4lma](https://dev.to/receter/how-to-create-a-react-component-library-using-vites-library-mode-4lma)

TODO:

1. przetestować - zaimportować componenty do innego projektu - consumera

## Global styles and variables

This library includes minimal global styles and CSS variables. To use them, import explicitly: import 'your-lib/global-styles';

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x';
import reactDom from 'eslint-plugin-react-dom';

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```
