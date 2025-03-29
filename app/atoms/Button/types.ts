import { ViewStyle } from "react-native";
import { MyThemeType } from "../../utils/Theme/types";

export interface ButtonProps {
  children: React.ReactNode;
  variant?: buttonVariants;
  color?: Exclude<keyof MyThemeType["colors"], "opacity">;
}

export type buttonVariants = "contained" | "outlined" | "text";

export type StylesProps = {
  contained: (
    theme: MyThemeType,
    color: Exclude<keyof MyThemeType["colors"], "opacity">
  ) => ViewStyle;
  outlined: (
    theme: MyThemeType,
    color: Exclude<keyof MyThemeType["colors"], "opacity">
  ) => ViewStyle;
  text: (
    theme: MyThemeType,
    color: Exclude<keyof MyThemeType["colors"], "opacity">
  ) => ViewStyle;
  [key: string]: any;
};
