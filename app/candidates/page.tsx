import { title } from "@/components/primitives";
import backgroundImage from '../../assets/business-hand-shake.webp';
import { HeroImage } from "@/components/hero-image";

export default function CandidatesPage() {
	return (
		<div>
			<HeroImage 
				source={backgroundImage} 
				mainText="Candidates" 
				subText="We Build Lasting Relationships Between Candidates& Businesses" 
				showButton={true}
				buttonText="Jobs"
				alt="Business Hand Shake"
			/>
		</div>
	);
}
