import { useNavigation } from "@react-navigation/native";
import { height } from "App/constants/Sizes";
import React from "react";
import { View } from "react-native";
import {
  Svg,
  G,
  Path,
  Defs,
  Rect,
  ClipPath,
  Circle,
  Line as Lk,
} from "react-native-svg";
import { ViewProps } from "react-native-svg/lib/typescript/fabric/utils";

const Line = ({ width = "44", height = "44" }) => {
  const navigation = useNavigation();

  return (
    <Svg
      width="1"
      height="22"
      viewBox="0 0 1 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Lk x1="0.5" y1="2.18558e-08" x2="0.499999" y2="22" stroke="#09A5DB" />
    </Svg>
  );
};

export default Line;
