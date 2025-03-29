import { StyleSheet } from "react-native";
import { StylesProps } from "./types";

export const styles = StyleSheet.create<StylesProps>({
  container: (theme) => ({
    flex: 1,
    backgroundColor: theme.colors.background,
    padding: 16,
  }),
});
