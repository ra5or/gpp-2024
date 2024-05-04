import Image from "next/image";
import { Input, Textarea } from "@nextui-org/input";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import contactFormLines from "@public/assets/contactFormLines.svg";
import contactFormSecretary from "@public/assets/contactFormSecretary.png";
import { ContactButton } from "./contact-button";

export default function ContactForm() {
  return (
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
  );
}
