import "@/styles/globals.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "@/app/providers";
import { Navigation } from "./navbar";
import { Link } from "@nextui-org/link";
import clsx from "clsx";



export default function Layout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
				<Providers>
					<div className="w-full max-w-full max-h-full h-full relative">
						<Navigation />
						<div className="relative">
							{children}
						</div>
						<footer className="w-full flex items-center justify-center py-3">
							<Link
								isExternal
								className="flex items-center gap-1 text-current"
								href="https://nextui-docs-v2.vercel.app?utm_source=next-app-template"
								title="nextui.org homepage"
							>
								<span className="text-default-600">Powered by</span>
								<p>NextUI</p>
							</Link>
						</footer>
					</div>
				</Providers>
	);
}
