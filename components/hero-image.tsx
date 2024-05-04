import Image from "next/image";
import { Button } from "@nextui-org/button";

export const HeroImage = (props) => {
  let {
    source,
    alt,
    mainText,
    subText,
    showButton = false,
    buttonText = "",
  } = props;
  let buttonContents =
    showButton && buttonText ? (
      <Button
        variant="flat"
        size="lg"
        className="bg-slide-blue/100 text-menu-color m-5 w-36 mx-auto font-semibold"
      >
        {buttonText}
      </Button>
    ) : null;
  return (
    <div className="z-20 max-h-[70vh] overflow-hidden hidden relative md:flex">
      <Image
        className="z-0 relative"
        src={source}
        alt={alt}
        priority={true}
        sizes="100vw"
        style={{
          width: "100%",
          height: "auto",
          objectFit: "cover",
        }}
      />
      <div className="flex absolute w-full h-full bg-slide-blue/50 z-20 top-0 bottom-0">
        <div className="relative mx-auto my-auto flex flex-col text-center text-menu-color gap-3 hidden md:block">
          <div className="font-bold text-6xl cursor-default">{mainText}</div>
          <div className="text-2xl font-semibold cursor-default">{subText}</div>
          {buttonContents}
        </div>
      </div>
    </div>
  );
};
