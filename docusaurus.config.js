// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Alephium Documentation",
  tagline:
    "The 1st operational sharded blockchain scaling and improving on PoW & UTXO to deliver a highly performant, secure and energy efficient DeFi & dApps platform.",
  url: "https://wiki.alephium.org",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "Alephium", // Usually your GitHub org/user name.
  projectName: "alephium", // Usually your repo name.

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/", // Serve the docs at the site's root
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: ({ locale, versionDocsDirPath, docPath }) =>
            `https://github.com/alephium/wiki/tree/master${
              locale !== "en"
                ? `/i18n/${locale}/docusaurus-plugin-content-docs/current`
                : `/${versionDocsDirPath}`
            }/${docPath}`,
        },
        blog: false,
        // theme: {
        //   customCss: require.resolve("./src/css/custom.css"),
        // },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Alephium",
        logo: {
          alt: "Alephium logo",
          src: "img/alephium-logo.svg",
        },
        items: [
          {
            href: "https://github.com/alephium/wiki",
            label: "GitHub",
            position: "right",
          },
          {
            type: "localeDropdown",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://discord.gg/JErgRBfRSB",
                postion: "left",
              },
              {
                label: "Telegram",
                href: "https://t.me/alephiumgroup",
                postion: "left",
              },
              {
                label: "Reddit",
                href: "https://www.reddit.com/r/alephium",
                postion: "left",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/alephium",
                postion: "left",
              },
            ],
          },
          {
            title: "Resources",
            items: [
              {
                label: "Explorer",
                href: "https://explorer.alephium.org",
              },
              {
                label: "Get the wallet",
                href: "https://github.com/alephium/desktop-wallet/releases/latest",
              },
              {
                label: "Tokenomics",
                href: "https://medium.com/@alephium/tokenomics-of-alephium-61d59b51029c",
              },
              {
                label: "White papers",
                href: "https://github.com/alephium/white-paper/",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/alephium",
                position: "right",
              },
              {
                label: "Alephium Website",
                href: "https://alephium.org",
                position: "right",
              },
              {
                label: "Blog",
                href: "https://medium.com/@alephium",
                position: "right",
              },
            ],
          },
        ],
        copyright: `Some rights reserved ${new Date().getFullYear()} Alephium. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
  plugins: [
    [
      "@docusaurus/plugin-client-redirects",
      {
        redirects: [
          { from: "/Introduction.html", to: "/" },
          {
            from: "/Frequently-Asked-Questions.html",
            to: "/frequently-asked-questions",
          },
          {
            from: "/Full-Node-Starter-Guide.html",
            to: "/full-node/Full-Node-Starter-Guide",
          },
          {
            from: "/Docker-Guide.html",
            to: "/full-node/Docker-Guide",
          },
          {
            from: "/Full-Node-More.html",
            to: "/full-node/Full-Node-More",
          },
          {
            from: "/Full-node-on-raspberry-pi.html",
            to: "/full-node/Full-node-on-raspberry-pi",
          },
          {
            from: "/Solo-Mining-Guide.html",
            to: "/mining/Solo-Mining-Guide",
          },
          {
            from: "/Pool-Mining-Guide.html",
            to: "/mining/Pool-Mining-Guide",
          },
          {
            from: "/Miner-Troubleshooting.html",
            to: "/mining/Miner-Troubleshooting",
          },
          {
            from: "/Alephium-Stratum.html",
            to: "/mining/Alephium-Stratum",
          },
          { from: "/Wallet-Guide.html", to: "/wallet/Wallet-Guide" },
          {
            from: "/Multisig-Guide.html",
            to: "/wallet/Multisig-Guide",
          },
          {
            from: "/Smart-Contract-Guide.html",
            to: "/dapps/Technical-Guide-With-A-Fullnode",
          },
          {
            from: "/Smart-Contract-More.html",
            to: "/dapps/Additional-Information",
          },
          { from: "/Roadmap.html", to: "/5min-overview" },
          {
            from: "/Testnet-Guide.html",
            to: "/testnet-and-devnet/Testnet-Guide",
          },
          {
            from: "/Devnet-Guide.html",
            to: "/testnet-and-devnet/Devnet-Guide",
          },
          {
            from: "/CPU-Miner-Guide.html",
            to: "/testnet-and-devnet/CPU-Miner-Guide",
          },
          {
            from: "/On-dust-outputs-and-state-explosion.html",
            to: "/misc/On-dust-outputs-and-state-explosion",
          },
          {
            from: "/Internationalization-and-Localization.html",
            to: "/misc/Internationalization-and-Localization",
          },
        ],
      },
    ],
  ],
  i18n: {
    defaultLocale: "en",
    locales: ["en", "fr"],
  },
};

module.exports = config;
