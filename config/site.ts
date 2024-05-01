export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Global Power Projects",
	navItems: [
		{
			label: "Employers",
			href: "/employers",
			menuColor: "!text-menu-color"
		},
		{
		label: "Candidates",
		href: "/candidates",
		menuColor: "!text-menu-color"
		},
		{
		label: "Contact Us",
		href: "/contact",
		menuColor: "!text-menu-color"
		},
	],
	links: {
		github: "https://github.com/nextui-org/nextui",
		twitter: "https://twitter.com/getnextui",
		docs: "https://nextui.org",
		discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev"
	},
};
