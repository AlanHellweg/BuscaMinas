import { StyleSheet } from "react-native";
import { Styles } from "./types";

export const styles: Styles = StyleSheet.create<Styles>({
  color: (theme, _color) => ({
    color: theme.colors[_color],
  }),
  h1: {
    fontSize: 32,
    fontWeight: "bold",
  },
  h2: {
    fontSize: 28,
    fontWeight: "bold",
  },
  h3: {
    fontSize: 24,
    fontWeight: "bold",
  },
  h4: {
    fontSize: 20,
    fontWeight: "bold",
  },
  h5: {
    fontSize: 18,
    fontWeight: "bold",
  },
  h6: {
    fontSize: 16,
    fontWeight: "bold",
  },
  p: {
    fontSize: 14,
    fontWeight: "normal",
  },
  small: {
    fontSize: 12,
    fontWeight: "normal",
  },
  caption: {
    fontSize: 10,
    fontWeight: "normal",
  },
  align: (align) => ({
    textAlign: align,
  }),
});
