import { HeroImage } from "@/components/hero-image";
import candidatesImage from "@/public/assets/candidates-hero-image.png";

export default function CandidatesPage() {
  return (
    <div>
      <HeroImage
        source={candidatesImage}
        mainText="Candidates"
        subText="We Build Lasting Relationships Between Candidates & Businesses"
        alt="Job candidates"
      />
      <div className="flex flex-col gap-8">
        <p className="text-center md:py-20 md:px-[15%] p-10 text-lg">
          GPP Recruitment is an Independent Recruitment Specialist focussed in
          the Power Generation, Renewable and Energy Industries.
          <br />
          <br />
          The team at GPP understands that success in our business is built on
          relationships with our candidates and engineers. Our candidate support
          teams provide the personal support and logistics to our consultants
          throughout the mobilisation process and during their deployment.
          <br />
          <br />
          Our team members have been personally involved in over 5,000
          deployments worldwide. This experience gives our consultants a smooth
          and seamless deployment and the time to focus on what’s important –
          project delivery.
        </p>
      </div>
    </div>
  );
}
