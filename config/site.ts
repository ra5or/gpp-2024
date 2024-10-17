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
    jobsFeed: "https://oilandgasjobsearch.com/companies/515",
    linkedIn:
      "https://www.linkedin.com/company/gpp-recruitment-limited/jobs/?viewAsMember=true",
    x: "https://discord.gg/9b6yyZKmH4",
  },
};
