import { useEffect, useMemo } from "react";
import { View } from "react-native";
import { IconProps } from "./types";
import { Icons } from "../../src/assets/icons";

const Icon = ({ icon, width }: IconProps) => {
  const Component = useMemo(() => Icons[icon], [icon]);

  useEffect(() => {
    if (!Component) {
      console.warn("No existe un Icon con el nombre:", icon);
    }
  }, [Component]);

  if (!Component) {
    return null;
  }

  return (
    <View style={{ width, height: width }}>
      <Component />
    </View>
  );
};
export default Icon;
