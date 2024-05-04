import { ContactButton } from "@components/contact-button";
import { FeatureCard, FeatureCardArgs } from "@components/feature-card";
import { HeroImage } from "@components/hero-image";
import employersImage from "@public/assets/employers-image.webp";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import router from "next/router";

const featureCardArgs: FeatureCardArgs[] = [
  {
    imageSource: "/assets/1.svg",
    altText: "Number 1",
    cardTitle: "Time Saving",
    iconBackgroundColor: "gpp-blue",
    cardDescription:
      "We reduce time spent searching, sourcing, researching, screening, reference checking and shortlisting for our clients.",
  },
  {
    imageSource: "/assets/2.svg",
    altText: "Number 3",
    cardTitle: "Competitive Hiring Process",
    iconBackgroundColor: "gpp-green",
    cardDescription:
      "We search our candidates from a wider talent pool so that only the best specialist candidates make our shortlist.",
  },
  {
    imageSource: "/assets/3.svg",
    altText: "Number 3",
    cardTitle: "Flexible Solutions",
    iconBackgroundColor: "gpp-yellow",
    cardDescription:
      "We work with our clients to offer the best solution for their needs at the time. GPP offers our clients the packages to on engage us on a volume bases, individual hire or retained search service.",
  },
];

export default function AboutPage() {
  return (
    <div>
      <HeroImage
        source={employersImage}
        mainText="About Us"
        subText="We Build Lasting Relationships Between Candidates & Businesses"
        alt="Business Handshake Deal"
      />
      {
        <div className="flex flex-col gap-8">
          <p className="text-center md:py-20 md:px-[15%] p-10 text-lg">
            GPP Recruitment is an Independent Recruitment Specialist focussed in
            the Power Generation, Renewable and Energy Industries.
            <br />
            <br />
            The team at GPP understands that success in our business is built on
            relationships with our candidates and engineers. Our candidate
            support teams provide the personal support and logistics to our
            consultants throughout the mobilisation process and during their
            deployment. Our team members have been personally involved in over
            5,000 deployments worldwide. This experience gives our consultants a
            smooth and seamless deployment and the time to focus on what’s
            important – project delivery.
          </p>
          <p className="text-center text-3xl font-semibold">What We Do</p>
          <p className="text-lg mx-auto text-center md:w-[50%] w-[80%]">
            GPP Recruitment Consultants understand that getting the right mix of
            personality, technical background and ambitions are important to
            making any hire a successful one
          </p>
          <div className="flex md:flex-row flex-col justify-between">
            {featureCardArgs.map((args, idx) => {
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
