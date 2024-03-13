import image from "@astrojs/image";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://astroship.web3templates.com",
  integrations: [
    tailwind(),
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
      domains: ["astro.build", "https://letusguide.com/"],
      remotePatterns: [{ protocol: "https" }],
    }),
    mdx(),
    sitemap(),
  ],
});
