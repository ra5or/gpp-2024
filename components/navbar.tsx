'use client'

import { Link } from "@nextui-org/link";

import { link as linkStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import clsx from "clsx";

import {
	XSocialMediaIcon,
	LinkedInIcon,
	LogoAsImage,
} from "@/components/icons";
import {  Navbar,NavbarBrand, NavbarContent, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from "@nextui-org/navbar";
import React from "react";

export const Navigation = () => {
	const [isMenuOpen, setIsMenuOpen] = React.useReducer((current) => !current, false);
	const menuItems = [
		{
			label: "Home",
			href: ""
		},
		{
			label: "Employers",
			href: "employers"
		},
		{
			label: "Candidates",
			href: "candidates"
		},
		{
			label: "Contact",
			href: "contact"
		},
	  ];
	
	return (
			<Navbar isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen} position="static" maxWidth="full" isBlurred={false} className="md:absolute md:bg-white/0">
				<NavbarContent>
					<div className="flex w-full md:justify-between z-30">
						<div className="md:pl-3 flex mx-auto md:mx-0 pl-0 gap-10">
							<NavbarMenuToggle
								aria-label={isMenuOpen ? "Close menu" : "Open menu"}
								className="sm:hidden"
							/>
							<div >
								<NavbarBrand>
									<NextLink href={"/"}>
										<LogoAsImage />
									</NextLink>
								</NavbarBrand>							
							</div>
						</div>
						<div className="md:flex md:justify-self-end gap-10 hidden">
							{siteConfig.navItems.map((item) => (
									<Link
										key={item.href}
										className={`font-bold my-auto tex-lg ${item.menuColor}`}
										href={item.href}
									>
									{item.label}
									</Link>
							))}
							<div className="flex pr-10 gap-3">
								<Link isExternal href={siteConfig.links.discord} aria-label="X">
									<XSocialMediaIcon className="text-menu-color" />
								</Link>
								<Link isExternal href={siteConfig.links.github} aria-label="LinkedIn">
									<LinkedInIcon className="text-menu-color"/>
								</Link>
							</div>
						</div>
					</div>
				</NavbarContent>
				<NavbarMenu>
					   {menuItems.map((item, index) => (
						 <NavbarMenuItem key={`${item}-${index}`}>
						   <Link
							 color="foreground"
							 className="w-full"
							 href={`/${item.href}`}
							 size="lg"
							 onPress={() => setIsMenuOpen()}
						   >
							 {item.label}
						   </Link>
						 </NavbarMenuItem>
					   ))}
					</NavbarMenu>
			</Navbar>
					


		);
	}
