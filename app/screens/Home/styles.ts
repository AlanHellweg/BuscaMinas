import { StyleSheet } from "react-native";
import { StylesProp } from "./types";

export const styles = StyleSheet.create<StylesProp>({
  contTitle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  title: {
    marginRight: 10,
  },
});
