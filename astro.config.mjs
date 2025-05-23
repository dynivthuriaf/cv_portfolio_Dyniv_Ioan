import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site:'https://dynivthuriaf.github.io',
  base:'/cv_portfolio_Dyniv_Ioan/',
  trailingSlash:'always',
  integrations: [tailwind()],
});
