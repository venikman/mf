import { defineConfig } from "vite";
import { federation } from "@module-federation/vite";
import react from "@vitejs/plugin-react";
import { dependencies } from "./package.json";

export default defineConfig({
  server: {
    port: 3000,
    origin: "http://localhost:3000",
  },
  build: {
    target: "chrome89",
  },
  plugins: [
    react(),
    federation({
      name: "host",
      filename: "remoteEntry.js",
      shared: {
        react: {
          requiredVersion: dependencies.react,
          singleton: true,
        },
      },
      remotes: {
        remote: {
          type: "module",
          name: "remote",
          entry: "http://localhost:3001/remoteEntry.js",
          entryGlobalName: "remote",
          shareScope: "default",
        },
      },
    }),
  ],
});
