import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { Type } from "typescript";

export interface BannerArgs { imageSource, secondImageSource, alt: string, secondAlt: string, titleText: string, descriptionText: string, reverse?: boolean };

export const FeatureBanner = async (props) => { 
    const { imageSource, secondImageSource, secondAlt, alt, titleText, descriptionText, reverse = false } : BannerArgs = props;

    return (
        <div className={`flex relative md:flex-row${reverse ? "-reverse" : ""}  z-30 w-[100%] shadow-md`}>
                <Image 
                    src={imageSource}
                    alt={alt}
                    className="md:w-[35%]"
                />
            <div className={`relative justify-end flex gap-1 flex-row${reverse ? "-reverse" : ""}`}>
                <div className="flex flex-col my-auto gap-5 md:pl-10 p-10">
                    <p className="text-lg font-bold">{titleText}</p>
                    <p>{descriptionText}</p>
                </div>
                <Image 
                    src={secondImageSource}
                    alt={secondAlt}
                    className="hidden md:flex md:w-[30%] md:h-auto"
                />
            </div>
        </div>
    )
}