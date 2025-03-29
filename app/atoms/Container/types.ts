import { ViewStyle } from "react-native";
import { MyThemeType } from "../../utils/Theme/types";

export interface ContainerProps {
  children: React.ReactNode;
  style?: ViewStyle;
}

export type StylesProps = {
  container: (theme: MyThemeType) => ViewStyle;
  [key: string]: any;
};
