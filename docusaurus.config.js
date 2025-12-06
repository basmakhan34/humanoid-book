// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Humanoid Robotics Book',
  tagline: 'Learn about humanoid robots',
  favicon: 'img/favicon.ico',

  // GitHub Pages deploy ke liye URL aur baseUrl
  url: 'https://basmakhan34.github.io', // GitHub Pages URL
  baseUrl: '/humanoid-book/',           // Repo name

  organizationName: 'basmakhan34',  // GitHub username
  projectName: 'humanoid-book',     // Repo name

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs',
          routeBasePath: '/', // Homepage pe docs show honge
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/basmakhan34/humanoid-book/edit/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/basmakhan34/humanoid-book/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Humanoid Robotics Book',
        logo: {
          alt: 'Humanoid Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Humanoid Book',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/basmakhan34/humanoid-book',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Humanoid Book',
                to: '/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'X',
                href: 'https://x.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/basmakhan34/humanoid-book',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Basma Khan. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
