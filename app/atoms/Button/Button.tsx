import { Pressable } from "react-native";
import { ButtonProps } from "./types";
import Text from "../Text";

const Button = ({ children, variant, color }: ButtonProps) => {
  return (
    <Pressable>
      <Text>{children}</Text>
    </Pressable>
  );
};

export default Button;
