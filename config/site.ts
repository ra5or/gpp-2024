export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Global Power Projects",
  navItems: [
    {
      label: "Employers",
      href: "/employers",
    },
    {
      label: "Candidates",
      href: "/candidates",
    },
    {
      label: "About Us",
      href: "/about",
    },
    {
      label: "Contact Us",
      href: "/contact",
    },
  ],
  links: {
    github: "https://github.com/nextui-org/nextui",
    twitter: "https://twitter.com/getnextui",
    docs: "https://nextui.org",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
