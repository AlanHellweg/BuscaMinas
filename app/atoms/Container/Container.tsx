import { useMemo } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ContainerProps } from "./types";
import { styles } from "./styles";
import useAppTheme from "../../utils/Theme";

const Container = ({ children, style }: ContainerProps) => {
  const theme = useAppTheme();
  const _containerStyles = useMemo(() => {
    return [style, styles.container(theme)];
  }, [style, theme]);

  return <SafeAreaView style={_containerStyles}>{children}</SafeAreaView>;
};

export default Container;
