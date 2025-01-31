// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Infarma Docs - Varejo',
  tagline: 'Toda a documentação do varejo na sua tela!',
  favicon: 'https://www.infarma.com.br/wp-content/themes/infarmasitev2/assets/img/2023/favicon_white.png',

  url: "https://infarma.com.br",
  baseUrl: "/",

  organizationName: 'facebook', // Ajuste conforme necessário
  projectName: 'docusaurus', 

  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.js',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Infarma Docs',
      logo: {
        src: 'https://www.infarma.com.br/wp-content/themes/infarmasitev2/assets/img/favicon.png',
        srcDark: 'https://www.infarma.com.br/wp-content/themes/infarmasitev2/assets/img/2023/favicon_white.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Tutorial',
        },
        { to: '/blog/', label: 'Versão', position: 'left' },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Tutorial",
              to: "/docs/intro",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "LinkedIn",
              href: "https://www.linkedin.com/company/infarma-sistemas/mycompany/verification/",
            },
            {
              label: "Site Infarma",
              href: "https://www.infarma.com.br/",
            },
          ],
        },
        {
          title: "Sobre",
          items: [
            {
              label: "Versão",
              to: "/blog/",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Infarma, Inc. Built with Weldercris.`,
    },
    prism: {
      theme: prismThemes.github, // Tema do modo claro
      darkTheme: {
        ...prismThemes.dracula, // Mantém a base Dracula
        plain: {
          color: '#1444a4', // Define azul como cor principal no modo escuro
          backgroundColor: '#1e1e1e', // Mantém fundo escuro
        },
        styles: [
          {
            types: ['keyword', 'operator'],
            style: { color: '#1444a4' }, // Azul para palavras-chave e operadores
          },
          {
            types: ['function'],
            style: { color: '#ffffff' }, // Branco para funções
          },
          {
            types: ['string'],
            style: { color: '#00ffcc' }, // Verde claro para strings
          },
        ],
      },
    },
  },
};

export default config;
