import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import type { ConfigEnv } from "vite";

export default ({ mode }: ConfigEnv) => {
  const env = loadEnv(mode, process.cwd(), "");
  return defineConfig({
    plugins: [react()],
    base: env.VITE_BASE || "/user-dashboard/",
  });
};
