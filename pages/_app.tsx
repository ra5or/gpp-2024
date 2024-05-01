import Layout from '@/components/layout';
import { siteConfig } from '@/config/site';
import { Metadata } from 'next';
import App, { AppContext, AppInitialProps, AppProps } from 'next/app'
 
export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" }
	],
	icons: {
		icon: [
			{
				url: "favicon.ico"
			},
			{
				url: "/favicon-16x16.png",
				sizes: "16x16"
			},
			{
				url: "/favicon-32x32.png",
				sizes: "32x32"
			}
		],
		apple: {
			url: "/apple-touch-icon.png",
			sizes: "180x180"
		}
		
	},
};


 
type AppOwnProps = { example: string }
 
export default function MyApp({
  Component,
  pageProps,
  example,
}: AppProps & AppOwnProps) {
  return (
    <>
        <Layout>
            <Component {...pageProps} />
        </Layout>
    </>
  )
}
 
MyApp.getInitialProps = async (
  context: AppContext
): Promise<AppOwnProps & AppInitialProps> => {
  const ctx = await App.getInitialProps(context)
 
  return { ...ctx, example: 'data' }
}