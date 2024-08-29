// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const {themes} = require('prism-react-renderer');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Documentação de Saúde Pública - Atibaia',
  tagline: 'Recursos para servidores da saúde do município de Atibaia',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://seu-dominio.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'prefeitura-atibaia', // Usually your GitHub org/user name.
  projectName: 'saude-docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/prefeitura-atibaia/saude-docs/tree/main/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'areas',
        path: 'areas',
        routeBasePath: 'areas',
        sidebarPath: require.resolve('./sidebarsAreas.js'),
      },
    ],
    // ... outros plugins
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'SMS Atibaia',
        logo: {
          alt: 'Logo SMS Atibaia',
          src: 'img/logo.svg',
        },
        items: [
          {to: '/', label: 'Início', position: 'left'},
          {to: '/areas', label: 'Áreas', position: 'left'},
          {to: '/docs/intro', label: 'Documentos', position: 'left'},
          {
            type: 'search',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Neste site',
            items: [
              {label: 'Início', to: '/'},
              {label: 'Documentos', to: '/docs/intro'},
              {label: 'Áreas', to: '/areas'},
            ],
          },
          {
            title: 'Links',
            items: [
              {label: 'Prefeitura de Atibaia', href: 'https://www.atibaia.sp.gov.br/'},
              {label: 'Secretaria de Saúde', href: 'https://www.atibaia.sp.gov.br/secretaria/saude/'},
            ],
          },
          {
            title: 'Áreas',
            items: [
              {label: 'Ambiental', to: '/areas/ambiental'},
              {label: 'Básica', to: '/areas/basica'},
              {label: 'Epidemiológica', to: '/areas/epidemiologica'},
              {label: 'Especializada', to: '/areas/especializada'},
              {label: 'Farmácia', to: '/areas/farmacia'},
              {label: 'Sanitária', to: '/areas/sanitaria'},
              {label: 'VISAT', to: '/areas/visat'},
            ],
          },
          {
            title: 'Saiba mais',
            items: [
              {label: 'Sobre nós', to: '/about'},
              {label: 'Contato', to: '/contact'},
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} SMS Atibaia. Todos os direitos reservados.`,
      },
      prism: {
        theme: themes.github,
        darkTheme: themes.dracula,
      },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
    }),
};

module.exports = config;
