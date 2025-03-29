import { IconProps } from "../../../atoms/Icon/types";
import BombIcon from "./BombIcon";

export type IconsList = "bombIcon";

export const Icons: {
  [key: string]: React.FC<Omit<IconProps, "icon">>;
} = {
  bombIcon: BombIcon,
};
