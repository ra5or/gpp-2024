import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { Type } from "typescript";

export interface BannerArgs { imageSource, secondImageSource, alt: string, secondAlt: string, titleText: string, descriptionText: string, reverse?: boolean };

export const FeatureBanner = async (props) => { 
    const { imageSource, secondImageSource, secondAlt, alt, titleText, descriptionText, reverse = false } : BannerArgs = props;
    const style = reverse ? "flex flex-row-reverse relative md:top-[-2rem] z-30 w-[100%] md:flex-col" : "flex relative md:flex-row md:top-[-2rem] z-30 w-[100%] flex-col";
    return (
        <div className={style}>
                <Image 
                    src={imageSource}
                    alt={alt}
                    className="md:w-[45%] sm:w-[100%]"
                />
            <div className="relative bottom-0 justify-end flex flex-col md:flex-row md:p-20 p-5">
                <div className="flex flex-col my-auto gap-5">
                    <p className="text-lg font-bold">{titleText}</p>
                    <p>{descriptionText}</p>
                </div>
                <Image 
                    src={secondImageSource}
                    alt={secondAlt}
                />
            </div>
        </div>
    )
}