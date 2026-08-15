// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const isLovableBuild =
  process.env["LOVABLE_SANDBOX"] === "1" || Boolean(process.env["DEV_SERVER__PROJECT_PATH"]);

export default defineConfig({
  // Standalone builds prerender with TanStack's own server artifact. Lovable
  // builds retain the deployment adapter and output layout expected by Lovable.
  nitro: isLovableBuild,
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    // Generate static HTML for the public routes so the site can be served by GitHub Pages.
    prerender: {
      // Lovable's deployment adapter owns its server output and does not use
      // TanStack's local preview server during the build.
      enabled: !isLovableBuild,
      crawlLinks: true,
      autoStaticPathsDiscovery: true,
      failOnError: true,
    },
  },
});
