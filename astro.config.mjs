import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  // Replace 'maheshchanda' with your GitHub username
  site: 'https://mahesh-chandaa.github.io', 
  // Replace 'portfolio' with your actual GitHub repository name
  base: '/portfolio', 
});