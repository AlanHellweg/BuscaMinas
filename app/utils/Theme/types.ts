import { Theme } from "@react-navigation/native";

export type MyThemeType = Theme & {
  colors: {
    background: string;
  };
  gradients: {};
};
