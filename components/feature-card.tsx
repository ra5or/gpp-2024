import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import Image from "next/image";
import { GlobalColors } from "@types";

export type FeatureCardArgs = {
  altText: string;
  imageSource;
  cardTitle: string;
  iconBackgroundColor: string;
  cardDescription: string;
};

export const FeatureCard = (props: FeatureCardArgs) => {
  let {
    imageSource,
    altText,
    cardTitle,
    iconBackgroundColor,
    cardDescription,
  } = props;
  let bgColor: string =
    GlobalColors.find((x) => x.name === iconBackgroundColor)?.value ?? "";

  return (
    <div className="flex md:basis-1/3 p-10 w-full">
      <Card className="w-[100%] p-10 md:p-5 md:shadow-none gap-5">
        <CardHeader className="flex">
          <div
            className={`flex p-3 rounded-[75px] w-[150px] h-[150px] mx-auto`}
            style={{ backgroundColor: bgColor }}
          >
            <Image
              alt={altText}
              src={imageSource}
              width={130}
              height={130}
              className="p-5"
            />
          </div>
        </CardHeader>
        <CardBody className="text-center gap-8 md:p-10">
          <p className="text-2xl font-bold text-center">{cardTitle}</p>
          <p className="text-lg">{cardDescription}</p>
        </CardBody>
      </Card>
    </div>
  );
};
