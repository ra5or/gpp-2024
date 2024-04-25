import { Link } from "@nextui-org/link";

import { link as linkStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import clsx from "clsx";

import { ThemeSwitch } from "@/components/theme-switch";
import {
	XSocialMediaIcon,
	LinkedInIcon,
	LogoAsImage,
} from "@/components/icons";

export const Navbar = () => {
	return (
				<div className="flex p-5 w-full justify-between z-30 absolute">
					<div className="hidden md:flex">
						<NextLink href={"/"}>
							<LogoAsImage />
						</NextLink>
					</div>
					<div className="flex md:justify-self-end gap-10">
						{siteConfig.navItems.map((item) => (
								<NextLink
									key={item.href}
									className={clsx(
										linkStyles(),
										"data-[active=true]:text-primary data-[active=true]:font-medium",
										"font-bold",
										"my-auto",
										"text-lg",
										item.menuColor
									)}
									href={item.href}
								>
								{item.label}
								</NextLink>
						))}
						<div className="flex gap-2 md:pl-10">
							<Link isExternal href={siteConfig.links.discord} aria-label="X">
								<XSocialMediaIcon className="text-menu-color" />
							</Link>
							<Link isExternal href={siteConfig.links.github} aria-label="LinkedIn">
								<LinkedInIcon className="text-menu-color"/>
							</Link>
						</div>
						<ThemeSwitch className="hidden md:flex md:pl-20"/>
					</div>
				</div>
	);
};
