import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://cultivator.theboundless.space",
    title: "The Boundless",
    description: "Worldbuilding, lore e ficção especulativa.",
    author: "cultivator",
    profile: "https://bsky.app/profile/cultivator.theboundless.space",
    ogImage: "default-og.jpg",
    lang: "pt-BR",
    timezone: "America/Sao_Paulo",
    dir: "ltr",
  },
  posts: {
    perPage: 4,
    perIndex: 4,
    scheduledPostMargin: 15 * 60 * 1000,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: true,
    showBackButton: true,
    editPost: {
      enabled: false,
    },
    search: "pagefind",
  },
  socials: [
    { name: "bluesky", url: "https://bsky.app/profile/cultivator.theboundless.space" },
    { name: "mail",    url: "mailto:the.boundless@outlook.com" },
  ],
  shareLinks: [
    { name: "bluesky",  url: "https://bsky.app/intent/compose?text=" },
    { name: "telegram", url: "https://t.me/share/url?url=" },
    { name: "mail",     url: "mailto:?subject=See%20this%20post&body=" },
  ],
});