import { HeroImage } from "@/components/hero-image";
import backgroundImage from "@/assets/solar-power-plant-2.webp";
import { siteConfig, SiteConfig } from "@/config/site";
import { BannerArgs, FeatureBanner } from "@/components/feature-banner";
import imageSource1 from '@/assets/feature-banner-1.svg';
import imageSource2 from '@/assets/feature-banner-1-image-2.svg';

export default function Home() {
	const alt1 = "foo";
	const text1 = "bar";
	const featureBanner1Params : BannerArgs = {
		imageSource: imageSource1,
		secondImageSource: imageSource2,
		titleText: "Sole Pre-Recorded Video Interview With Each CV Submission",
		descriptionText: "Time saver for internal HR & speeds time to hire by 70%. Saves the HR team time by eliminating the need for 1st round interview",
		alt: "Business Webinar",
		secondAlt: "Power Lines"
	}
	return (
		<div>
			<HeroImage 
				source={backgroundImage} 
				mainText="GPP Recruitment"
				subText="Continuously Improving Our Client Human Capital" 
				alt="Solar Power Plant"
			/>
			<div className="relative">
				<FeatureBanner
					key={0}
					{...featureBanner1Params}
				/>
			</div>
		</div>
	);
}
