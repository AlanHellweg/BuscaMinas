import { Text as RNText } from "react-native";
import { TextProps } from "./types";
import { styles } from "./styles";
import useAppTheme from "../../utils/Theme";
import { useMemo } from "react";

const Text = ({
  children,
  variant = "h4",
  color = "text",
  align = "left",
  style,
}: TextProps) => {
  const theme = useAppTheme();
  const _style = useMemo(() => {
    return [
      styles.color(theme, color),
      styles[variant],
      styles.align(align),
      style,
    ];
  }, [variant, color, align, style, theme]);

  return <RNText style={_style}>{children}</RNText>;
};

export default Text;
