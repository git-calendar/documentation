import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Git Calendar Docs',
  description: 'A private, open-source Git-backed calendar.',
  head: [
    ['link', { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' }],
    ['link', { rel: 'icon', href: '/favicon-96x96.png', type: 'image/png' }],
    ['link', { rel: 'icon', href: '/favicon.ico' }],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Architecture', link: '/architecture' },
    ],

    sidebar: [
      {
        text: 'Getting started',
        link: '/getting-started',
      },
      {
        text: 'Architecture',
        link: '/architecture',
      },
    ],

    socialLinks: [{ icon: 'github', link: 'https://github.com/git-calendar' }],
  },
  base: process.env.GITHUB_PAGES == 'true' ? '/documentation/' : '/',
});
