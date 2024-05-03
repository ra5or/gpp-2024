import { GlobalColors } from "@/types";
import { Button } from "@nextui-org/button";

export type ButtonArgs = {
  type: "button" | "submit" | "reset" | undefined;
  buttonText: string;
  size?: "lg" | "sm" | "md";
  bgColor?: "gpp-blue" | "gpp-yellow" | "gpp-green";
  textColor?: string;
  className?: string;
};

export const ContactButton = (props: ButtonArgs) => {
  let {
    type,
    size = "lg",
    bgColor = "gpp-blue",
    textColor = "white",
    buttonText,
    className,
  } = props;
  let backgroundColor: string =
    GlobalColors.find((x) => x.name === bgColor)?.value ?? "";

  return (
    <Button
      type={type}
      variant="flat"
      size="lg"
      className={`m-5 w-36 mx-0 font-semibold ${className}`}
      style={{ backgroundColor: backgroundColor, color: textColor }}
    >
      {buttonText}
    </Button>
  );
};
