import {SVGProps} from "react";
import { KeyValuePair } from "tailwindcss/types/config";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export const GlobalColors = [
  {
    name: "gpp-yellow", 
    value: "#F4D03A"
  },
  {
    name: "gpp-blue", 
    value: "#0FC7F9"
  },
  {
    name: "gpp-green", 
    value: "#5A8432"
  },
]
