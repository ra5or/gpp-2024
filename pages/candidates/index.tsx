import backgroundImage from "@/public/assets/business-hand-shake.webp";
import { HeroImage } from "@/components/hero-image";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { ContactButton } from "@/components/contact-button";
import { FeatureCard, FeatureCardArgs } from "@/components/feature-card";

const rowOneFeatureCardArgs: FeatureCardArgs[] = [
  {
    imageSource: "/assets/candidateFeature1.svg",
    altText: "Handshake",
    cardTitle: "Time Saving",
    iconBackgroundColor: "gpp-blue",
    cardDescription:
      "We reduce time spent searching, sourcing, researching, screening, reference checking and shortlisting for our clients.",
  },
  {
    imageSource: "/assets/candidateFeature2.svg",
    altText: "Puzzle Pieces",
    cardTitle: "Competitive Hiring Process",
    iconBackgroundColor: "gpp-green",
    cardDescription:
      "We search our candidates from a wider talent pool so that only the best specialist candidates make our shortlist.",
  },
  {
    imageSource: "/assets/candidateFeature3.svg",
    altText: "ID Cards",
    cardTitle: "Flexible Solutions",
    iconBackgroundColor: "gpp-yellow",
    cardDescription:
      "We work with our clients to offer the best solution for their needs at the time. GPP offers our clients the packages to on engage us on a volume bases, individual hire or retained search service.",
  },
];

const rowTwoFeatureCardArgs: FeatureCardArgs[] = [
  {
    imageSource: "/assets/candidateFeature4.svg",
    altText: "The World",
    cardTitle: "Time Saving",
    iconBackgroundColor: "gpp-blue",
    cardDescription:
      "We reduce time spent searching, sourcing, researching, screening, reference checking and shortlisting for our clients.",
  },
  {
    imageSource: "/assets/candidateFeature5.svg",
    altText: "Merit Ribbon",
    cardTitle: "Competitive Hiring Process",
    iconBackgroundColor: "gpp-green",
    cardDescription:
      "We search our candidates from a wider talent pool so that only the best specialist candidates make our shortlist.",
  },
  {
    imageSource: "/assets/candidateFeature6.svg",
    altText: "Solution Infographic",
    cardTitle: "Flexible Solutions",
    iconBackgroundColor: "gpp-yellow",
    cardDescription:
      "We work with our clients to offer the best solution for their needs at the time. GPP offers our clients the packages to on engage us on a volume bases, individual hire or retained search service.",
  },
];

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
      {
        <div className="flex flex-col gap-8">
          <p className="text-center md:py-20 md:px-[15%] p-10 text-lg">
            GPP Recruitment is an independent specialist recruitment company in
            the Power Generation Industry. Each of our Recruitment Consultants
            has a minimum of ten years’ experience in the industry giving our
            clients the best possible access to the industry’s leading engineers
            and management teams – with exceptional reputations in the market.We
            spend the time with our clients, to fully understand their project
            needs and corporate requirements, resulting in our clients receiving
            the right choice of shortlisted candidates to choose from. Our
            networks and talent pools are global, so wherever your project is
            located, GPP can source and deliver candidates from the local or
            international market place.
          </p>
          <div className="flex md:flex-row flex-col justify-between">
            {rowOneFeatureCardArgs.map((args, idx) => {
              // let {imageSource: src, altText: alt, cardTitle } = args;
              return <FeatureCard key={idx} {...args} />;
            })}
          </div>
          <div className="flex md:flex-row flex-col justify-between">
            {rowTwoFeatureCardArgs.map((args, idx) => {
              // let {imageSource: src, altText: alt, cardTitle } = args;
              return <FeatureCard key={idx} {...args} />;
            })}
          </div>
          <Card className="md:w-[60%] w-[80%] p-10 text-center mx-auto">
            <CardHeader>
              <p className="text-xl font-bold">
                We’ve worked with some great companies already. We think you
                should join them in your quest for top talent.
              </p>
            </CardHeader>
            <CardBody>
              <ContactButton
                type="button"
                bgColor="gpp-blue"
                buttonText="Contact Us"
                textColor="white"
                className="mx-auto"
              />
            </CardBody>
          </Card>
        </div>
      }
    </div>
  );
}
