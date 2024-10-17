import "@styles/globals.css";
import { Providers } from "@app/providers";
import { Navigation } from "./navbar";
import { LogoAsImage, PhoneIcon, EmailIcon } from "./icons";
import { FooterColumn, FooterColumnArgs } from "./footer-column";
import { FooterRow } from "./footer-row";

let footerColOneArgs: FooterColumnArgs = {
  country: "Hong Kong",
  phoneNumber: "+85281971035",
  email: "info@gpprecruitment.com",
};

let footerColTwoArgs: FooterColumnArgs = {
  country: "Australia",
  phoneNumber: "+61390284334",
  email: "info@gpprecruitment.com",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Providers>
      <div className="w-full max-w-full max-h-full h-full relative">
        <Navigation />
        <div className="relative">{children}</div>
        <footer className="pb-28">
          <div className="w-7/8 flex flex-col md:flex-row p-[10%] justify-start md:px-[20%] gap-20 pb-16 pt-24">
            <LogoAsImage />
            <FooterColumn {...footerColOneArgs} />
            <FooterColumn {...footerColTwoArgs} />
          </div>
          <div className="flex md:flex-row flex-col w-[70%] md:pl-[20%] pl-[10%] md:gap-20 gap-10">
            <FooterRow />
          </div>
        </footer>
      </div>
    </Providers>
  );
}
