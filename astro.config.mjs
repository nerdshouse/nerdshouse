import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://www.nerdshouse.com",
  devToolbar: { enabled: false },
  trailingSlash: "never",
  build: { format: "directory" },
  // Retired URLs from the previous site. Configure the same as permanent (301) redirects at the host.
  redirects: {
    "/services": "/#capabilities",
    "/blog": "/work",
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes("/404"),
    }),
  ],
});
