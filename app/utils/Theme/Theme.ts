import { DefaultTheme, DarkTheme, useTheme } from "@react-navigation/native";
import { MyThemeType } from "./types";
import { useColorScheme } from "react-native";

export const MyLightTheme: MyThemeType = {
  ...DefaultTheme,
  gradients: {},
  colors: {
    ...DefaultTheme.colors,
    background: "#fff",
  },
};

export const MyDarkTheme: MyThemeType = {
  ...DarkTheme,
  gradients: {
    primary: ["#121212", "#1e1e1e"],
  },
  colors: {
    ...DarkTheme.colors,
    background: "#3e3e42",
  },
};

export const useAppTheme = () => {
  const colorScheme = useColorScheme();
  return colorScheme === "dark" ? MyDarkTheme : MyLightTheme;
};
