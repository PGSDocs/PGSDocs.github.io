import {
  themes as prismThemes
} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'PGS Docs',
  tagline: 'Découvrez la documentation officielle de PGS',
  favicon: 'img/Cfg-LogoBlk.ico',

  url: 'https://pgsdocs.github.io',
  baseUrl: '/',

  organizationName: 'ProGestionSoft',
  projectName: 'PGSDocs',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en'],
  },

  presets: [
    ['classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
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
          blogTitle: 'PGS Blog',
          blogSidebarTitle: 'Articles récents'
        },

        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  plugins: [
    [require.resolve("@easyops-cn/docusaurus-search-local"),
      ({
        hashed: true,
        language: ["fr"],
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/Cfg-Share.png',

      navbar: {
        title: 'PGS Docs',

        logo: {
          alt: 'Logo',
          src: 'img/Cfg-LogoBlk.ico',
          srcDark: 'img/Cfg-LogoWth.ico',
        },

        hideOnScroll: true,

        items: [{
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            label: 'Docs',
            position: 'left',
          },
          {
            to: '/blog',
            label: 'Blog',
            position: 'left'
          },
          {
            type: 'dropdown',
            label: 'Liens utils',
            position: 'left',
            items: [{
                label: 'Hire PGS (Marché d\'emploi)',
                href: 'https://hire.progestionsoft.com',
              },
              {
                label: 'Forum PGS (Communauté et aide)',
                href: 'https://progestionsoft.com/forum',
              },
              {
                label: 'Certification',
                href: 'https://exemple.com',
              },
            ],
          },
          {
            type: 'search',
            position: 'right',
          },
          {
            type: 'localeDropdown',
            position: 'right',
            dropdownItemsAfter: [{
              to: 'https://facebook.com',
              label: 'Aider nous à traduire ce site',
            }],
          },
        ],
      },

      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },

      footer: {
        style: 'light',
        links: [{
            title: 'Ressources',
            items: [{
                label: 'Docs',
                to: '/docs/intro',
              },
              {
                label: 'Blog',
                to: '/blog',
              },
            ],
          },
          {
            title: 'Plus',
            items: [{
                label: 'Politique de confidentialité',
                href: 'https://progestionsoft.com/privacy',
              },
              {
                label: 'Conditions d\'utilisation',
                href: 'https://progestionsoft.com/term',
              },
            ],
          },
          {
            title: 'Communauté',
            items: [{
                label: 'Forum',
                href: 'https://progestionsoft.com/privacy',
              },
              {
                label: 'Télégram',
                href: 'https://progestionsoft.com/term',
              },
              {
                label: 'Facebook',
                href: 'https://progestionsoft.com/term',
              },
              {
                label: 'WhatsApp',
                href: 'https://progestionsoft.com/term',
              },
            ],
          },
          {
            title: 'Nous suivre',
            items: [
              {
                html: `
                  <a href="https://linkedin.com/company/ProGestionSoft"
                  target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <i class="fab fa-linkedin fa-2x" style="margin-right: 10px;"></i>
                  </a>
                  
                  <a
                  href="https://facebook.com/ProGestionSoft"
                  target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <i class="fab fa-facebook fa-2x" style="margin-right: 10px;"></i>
                  </a>

                  <a
                  href="https:/instagram.com/ProGestionSoft"
                  target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <i class="fab fa-instagram fa-2x" style="margin-right: 10px;"></i>
                  </a>

                  <a
                  href="https:/twitter.com/ProGestionSoft"
                  target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <i class="fab fa-twitter fa-2x" style="margin-right: 10px;"></i>
                  </a>

                  <a href="https://youtube.com/@ProGestionSoft"
                  target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                    <i class="fab fa-youtube fa-2x"></i>
                  </a>

                  <a href="https://tiktok.com/@ProGestionSoft"
                  target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                    <i class="fab fa-tiktok fa-2x"></i>
                  </a>
                `,
              },
            ]
          }
        ],

        copyright: `© ${new Date().getFullYear()} PRO GESTION SOFT, SARL`,
      },

      plugins: [
        '@docusaurus/plugin-content-docs',
        '@docusaurus/plugin-global-styles',
      ],

      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;