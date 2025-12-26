// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Humanoid Robotics Book',
  tagline: 'Learn about humanoid robots',
  favicon: 'img/favicon.ico',

  // GitHub Pages
  url: 'https://basmakhan34.github.io',
  baseUrl: '/humanoid-book/',

  organizationName: 'basmakhan34',
  projectName: 'humanoid-book',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      ({
        docs: {
          path: 'docs',
          routeBasePath: '/',
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

  themeConfig: ({
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
        { to: '/blog', label: 'Blog', position: 'left' },

        // ✅ AI CHATBOT BUTTON (YAHAN HAI)
        {
          href: 'https://your-streamlit-chatbot-link-here',
          label: '🤖 AI Chatbot',
          position: 'right',
        },

        {
          href: 'https://github.com/basmakhan34/humanoid-book',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },

    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Basma Khan`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  }),
};

export default config;
