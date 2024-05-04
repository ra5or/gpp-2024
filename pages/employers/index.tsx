import backgroundImage from "@/public/assets/business-hand-shake.webp";
import { HeroImage } from "@/components/hero-image";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { ContactButton } from "@/components/contact-button";
import { FeatureCard, FeatureCardArgs } from "@/components/feature-card";
import router from "next/router";

const rowOneFeatureCardArgs: FeatureCardArgs[] = [
  {
    imageSource: "/assets/candidateFeature1.svg",
    altText: "Handshake",
    cardTitle: "Fast Hiring Process",
    iconBackgroundColor: "gpp-blue",
    cardDescription:
      "GPP reduce time to hire by using delivery teams and being constantly engaged in the hiring market so when can provide the best candidates in the shortest time.",
  },
  {
    imageSource: "/assets/candidateFeature2.svg",
    altText: "Puzzle Pieces",
    cardTitle: "Flexible Workforce And Solutions",
    iconBackgroundColor: "gpp-green",
    cardDescription:
      "Whether you need a short term fixed or large multi person manpower increase, GPP can provide the technical specialist need to get the job done.",
  },
  {
    imageSource: "/assets/candidateFeature3.svg",
    altText: "ID Cards",
    cardTitle: "Large Talent Pool",
    iconBackgroundColor: "gpp-yellow",
    cardDescription:
      "As a power generation & energy specialist, GPP can provide some of the world few and hard to find technical experts to support any technology.",
  },
];

const rowTwoFeatureCardArgs: FeatureCardArgs[] = [
  {
    imageSource: "/assets/candidateFeature4.svg",
    altText: "The World",
    cardTitle: "International And Expatriate Hire Made Easy",
    iconBackgroundColor: "gpp-blue",
    cardDescription:
      "We reduce time spent searching, sourcing, researching, screening, reference checking and shortlisting for our clients.",
  },
  {
    imageSource: "/assets/candidateFeature5.svg",
    altText: "Merit Ribbon",
    cardTitle: "Years of Experience",
    iconBackgroundColor: "gpp-green",
    cardDescription:
      "Work with an Account Manager with at least 10 years experience in the international recruitment sector for Power and Oil & Gas.",
  },
  {
    imageSource: "/assets/candidateFeature6.svg",
    altText: "Solution Infographic",
    cardTitle: "Flexible Workforce And Solutions",
    iconBackgroundColor: "gpp-yellow",
    cardDescription:
      "Whether you need a short term fixed or large multi person manpower increase, Global Power Projects can provide the technical specialist need to get the job done.",
  },
];

export default function EmployersPage() {
  return (
    <div>
      <HeroImage
        source={backgroundImage}
        mainText="Employers"
        subText="Why Choose Us"
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
                clickHandler={() => router.push("/contact")}
              />
            </CardBody>
          </Card>
        </div>
      }
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {},
  };
}
