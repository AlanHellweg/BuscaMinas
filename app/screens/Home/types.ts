import { TextStyle, ViewStyle } from "react-native";

export interface StylesProp {
  contTitle: ViewStyle;
  title: TextStyle;
  contButton: ViewStyle;
  button: ViewStyle;
  [key: string]: any;
}
