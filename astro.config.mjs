import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://docs.thoxia.com",
  integrations: [
    starlight({
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
      },
      sidebar: [
        {
          label: "Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Example Guide", slug: "guides/example" },
          ],
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
    }),
  ],
});
