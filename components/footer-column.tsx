import { IconSvgProps } from "@/types";
import Link from "next/link";
import React from "react";
import { FunctionComponent } from "react";
import PhoneIcon from "@/public/assets/PhoneIcon.svg";
import EmailIcon from "@/public/assets/EmailIcon.svg";
import Image from "next/image";

export type FooterColumnArgs = {
  country: string;
  phoneNumber: string;
  email: string;
};

export const FooterColumn = (props: FooterColumnArgs) => {
  let { country, phoneNumber, email } = props;
  return (
    <div className="w-1/2 flex flex-col gap-12">
      <div
        className=" pb-2"
        style={{ borderBottom: "3px solid var(--gpp-blue)" }}
      >
        <div className="w-full h-auto w-7/8 gap-5">
          <p className="text-2xl font-semibold">{country}</p>
        </div>
      </div>
      <div className="flex gap-10 flex-col">
        <div className="flex gap-10">
          <Image width={30} height={30} src={PhoneIcon} alt="Phone Icon" />
          <Link className="text-xl" href="tel:+85281971035">
            {phoneNumber}
          </Link>
        </div>
        <div className="flex gap-10">
          <Image width={30} height={30} src={EmailIcon} alt="Email Icon" />
          <Link className="text-xl" href={`mailto:${email}`}>
            {email}
          </Link>
        </div>
      </div>
    </div>
  );
};
