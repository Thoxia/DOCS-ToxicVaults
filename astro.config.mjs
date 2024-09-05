import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://docs.thoxia.com",
  integrations: [
    starlight({
      defaultLocale: "root",
      locales: {
        root: {
          label: "English",
          lang: "en",
        },
        tr: {
          label: "Türkçe",
          lang: "tr",
        },
      },
      title: "THOXIA",
      logo: {
        src: "./src/assets/thoxia.webp",
        replacesTitle: false,
      },
      favicon: "/thoxia.ico",
      customCss: [
        // Relative path to your custom CSS file
        "./src/styles/thoxia.css",
      ],
      social: {
        github: "https://github.com/Thoxia",
        discord: "https://discord.gg/9vcAHQnZsg",
      },
      sidebar: [
        {
          label: "Welcome",
          link: "/welcome",
          translations: {
            tr: "Hoş geldiniz!",
          },
        },
        {
          label: "ToxicVaults",
          badge: { text: "customer favorite", variant: "success" },
          autogenerate: { directory: "toxicvaults" },
        },
      ],
    }),
  ],
});
