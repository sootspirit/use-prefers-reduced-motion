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
11. Local testing with npm link:

```
# In your package directory
npm link
```

```
# In your test project directory
npm link ../path-to-your-package
```

Removing connection

1. Using npm unlink in your test project:

```
npm unlink ../path-to-your-package
```

Note: This only removes the link in your project, not the global symlink.

2. The recommended approach - uninstall the global package:

```
npm uninstall -g package-name
```

This completely removes the symlink, ensuring that subsequent npm create commands will use the registry version.

[https://dev.to/receter/how-to-create-a-react-component-library-using-vites-library-mode-4lma](https://dev.to/receter/how-to-create-a-react-component-library-using-vites-library-mode-4lma)

## Global styles and variables

This library includes minimal global styles and CSS variables. To use them, import explicitly: import 'your-lib/global-styles';
