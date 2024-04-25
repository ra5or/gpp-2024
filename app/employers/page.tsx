import { HeroImage } from "@/components/hero-image";
import { title } from "@/components/primitives";
import employersImage from '../../assets/employers-image.webp';

export default function BlogPage() {
	return (
		<HeroImage 
		source={employersImage} 
		mainText="Employers" 
		subText="Why Choose Us" 
		alt="Business Handshake Deal"
	/>
	);
}
