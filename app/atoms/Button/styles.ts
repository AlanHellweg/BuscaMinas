import { StyleSheet } from "react-native";
import { StylesProps } from "./types";

const styles = StyleSheet.create<StylesProps>({
    contained: (theme) => ({
    }),
    outlined: (theme) => ({
        borderWidth: 1,
        borderColor: theme.colors.primary,
        backgroundColor: theme.colors.background,
    }),
    text: (theme) => ({
        backgroundColor: theme.colors.background,
    }),
});
