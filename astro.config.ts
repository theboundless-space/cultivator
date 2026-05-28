import { defineConfig, fontProviders } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import remarkToc from "remark-toc";
import remarkCollapse from "remark-collapse";
import tailwindcss from "@tailwindcss/vite";
import { envField } from "astro/config";


export default defineConfig({
  site: "https://cultivator.theboundless.space",
  integrations: [mdx(), sitemap()],
  i18n: {
    defaultLocale: "en",
    locales: ["en", "pt-BR"],
  },
  env: {
  schema: {
    PUBLIC_GOOGLE_SITE_VERIFICATION: envField.optional({
      context: "client",
      access: "public",
      default: "",
    }),
  },
  },
  fonts: [
    {
      provider: fontProviders.google(),
      name: "Google Sans Code",
      cssVariable: "--font-google-sans-code",
    },
  ],
  markdown: {
    remarkPlugins: [
      remarkToc,
      [remarkCollapse, { test: "Table of contents" }],
    ],
    shikiConfig: {
      themes: { light: "min-light", dark: "night-owl" },
      wrap: true,
    },
  },
  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: { exclude: ["@resvg/resvg-js"] },
  },
  scopedStyleStrategy: "where",
});