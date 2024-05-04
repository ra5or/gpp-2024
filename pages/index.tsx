"use client";

import { HeroImage } from "@/components/hero-image";
import backgroundImage from "@/public/assets/solar-power-plant-2.webp";
import { siteConfig, SiteConfig } from "@/config/site";
import { BannerArgs, FeatureBanner } from "@/components/feature-banner";
import Image from "next/image";
import { Card, CardBody, CardHeader } from "@nextui-org/card";

import mainImage1 from "@/public/assets/feature-banner-1-alt.svg";
import secondaryImage1 from "@/public/assets/feature-banner-1-image-2.svg";
import mainImage2 from "@/public/assets/feature-banner-2-alt.svg";
import secondaryImage2 from "@/public/assets/feature-banner-2-image-2.png";
import mainImage3 from "@/public/assets/feature-banner-3-alt.svg";
import secondaryImage3 from "@/public/assets/feature-banner-3-image-2.png";
import ourMarketsMap from "@/public/assets/our-markets-map.svg";
import contactFormLines from "@/public/assets/contactFormLines.svg";
import contactFormSecretary from "@/public/assets/contactFormSecretary.png";
import { Input, Textarea } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { ContactButton } from "@/components/contact-button";

export default function Home() {
  const featureBanners: BannerArgs[] = [
    {
      imageSource: mainImage1,
      secondImageSource: secondaryImage1,
      titleText: "Flexible Staffing Solutions",
      descriptionText:
        "Whether you need permanent, temporary, or contract staff, GPP Recruitment can tailor our services to meet your organization's staffing needs.",
      alt: "Business Webinar",
      secondAlt: "Power Lines",
    },
    {
      imageSource: mainImage2,
      secondImageSource: secondaryImage2,
      titleText: "Tailored Solutions",
      descriptionText:
        "Access our exceptional Value Add capabilities for mobilisation and contractor management logistics, which includes: sponsoring work permits, flight, accommodation management, payroll and local income tax management",
      alt: "Lady Checking Documents",
      secondAlt: "Wind Turbines",
      reverse: true,
    },
    {
      imageSource: mainImage3,
      secondImageSource: secondaryImage3,
      titleText: "Market Experts",
      descriptionText:
        "Work with an Account Manager with at least 10 years’ experience in the international recruitment sector, focussed within Power and Energy.",
      alt: "Man Working At Desk",
      secondAlt: "Power Grid",
    },
  ];

  return (
    <div>
      <HeroImage
        source={backgroundImage}
        mainText="GPP Recruitment"
        subText="Continuously Improving Our Client Human Capital"
        alt="Solar Power Plant"
      />
      <p className="md:hidden text-2xl text-center font-semibold p-5 text-foreground-600">
        What We Do
      </p>
      {featureBanners.map((args, idx) => {
        return (
          <div className="relative" key={idx}>
            <FeatureBanner {...args} />
          </div>
        );
      })}
      <div className="flex flex-col">
        <p className="text-4xl text-center font-semibold p-10 text-foreground-600">
          Our Markets
        </p>
        <Image
          src={ourMarketsMap}
          alt="Map of Serviced Areas"
          className="mx-auto"
        />
      </div>
      <div className="flex justify-center md:p-20 p-5">
        <Image
          className="relative z-0 top-[-13rem] left-[0.5rem] hidden md:block"
          src={contactFormLines}
          alt="Blue Yellow and Green Lines"
        />
        <Image
          className="absolute w-[40rem] z-20 right-[15rem] 2xl:block hidden"
          src={contactFormSecretary}
          alt="Secretary holding a clipboard"
        />
        <Card
          shadow="none"
          className="md:w-[40%] md:p-16 drop-shadow-lg w-full p-5 z-10"
        >
          <CardHeader>
            <div className="flex flex-col font-semibold md:text-xl text-lg">
              <p className="text-md">Contact Us</p>
            </div>
          </CardHeader>
          <CardBody className="flex gap-3">
            <Input
              isClearable
              size="lg"
              type="text"
              variant="underlined"
              label="Name"
            />
            <Input
              isClearable
              size="lg"
              type="email"
              variant="underlined"
              label="Email"
              isRequired
            />
            <Input
              isClearable
              size="lg"
              type="tel"
              variant="underlined"
              label="Contact Number"
            />
            <Textarea variant="underlined" label="Message" minRows={4} />
            <ContactButton
              type="submit"
              textColor="white"
              bgColor="gpp-blue"
              size="lg"
              className="m-5 w-36 mx-0"
              buttonText="Submit"
            />
          </CardBody>
        </Card>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {},
  };
}
