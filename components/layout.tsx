import "@styles/globals.css";
import { Providers } from "@app/providers";
import { Navigation } from "./navbar";
import { LogoAsImage, PhoneIcon, EmailIcon } from "./icons";
import { FooterColumn, FooterColumnArgs } from "./footer-column";

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
        <footer className="w-7/8 flex flex-col md:flex-row p-[10%] justify-start md:px-[20%] gap-20 pb-40 pt-24">
          <LogoAsImage />
          <FooterColumn {...footerColOneArgs} />
          <FooterColumn {...footerColTwoArgs} />
        </footer>
      </div>
    </Providers>
  );
}
