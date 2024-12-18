import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { federation } from "@module-federation/vite";
import { dependencies } from "./package.json";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "producer",
      filename: "remoteEntry.js",
      exposes: {
        "./Foo": "./src/routes/foo",
        "./Profile": "./src/routes/profile",
      },
      shared: {
        react: {
          requiredVersion: dependencies.react,
          singleton: true,
        },
      },
    }),
  ],
  server: {
    port: 3001,
    origin: "http://localhost:3001",
  },
  build: {
    target: "chrome89",
  },
});
