import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://circus-real.github.io",
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
