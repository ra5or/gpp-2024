import { HeroImage } from "@/components/hero-image";
import employersImage from '@/public/assets/employers-image.webp';

export default function EmployersPage() {
	return (
		<HeroImage 
		source={employersImage} 
		mainText="Employers" 
		subText="Why Choose Us" 
		alt="Business Handshake Deal"
	/>
	);
}
