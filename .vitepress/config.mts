import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Git Calendar Docs',
  description: 'A private, open-source Git-backed calendar.',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Architecture', link: '/deep-dive' },
    ],

    sidebar: [
      {
        text: 'Getting started',
        link: '/getting-started',
      },
      {
        text: 'Architecture',
        link: '/deep-dive',
      },
    ],

    socialLinks: [{ icon: 'github', link: 'https://github.com/git-calendar' }],
  },
  base: process.env.GITHUB_PAGES == 'true' ? '/documentation/' : '/',
});
