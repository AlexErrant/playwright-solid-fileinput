import fs from "fs";
import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
// import devtools from 'solid-devtools/vite';

const serverOptions = {
  port: 3000,
  strictPort: true,
  https: {
    key: fs.readFileSync("./.cert/key.pem"),
    cert: fs.readFileSync("./.cert/cert.pem"),
  },
};

export default defineConfig({
  plugins: [
    /* 
    Uncomment the following line to enable solid-devtools.
    For more info see https://github.com/thetarnav/solid-devtools/tree/main/packages/extension#readme
    */
    // devtools(),
    solidPlugin(),
  ],
  server: serverOptions,
  preview: serverOptions,
  build: {
    target: 'esnext',
  },
});
