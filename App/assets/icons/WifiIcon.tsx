import { useNavigation } from "@react-navigation/native";
import { height } from "App/constants/Sizes";
import React from "react";
import { View } from "react-native";
import { Svg, G, Path, Defs, Rect, ClipPath, Circle } from "react-native-svg";
import { ViewProps } from "react-native-svg/lib/typescript/fabric/utils";

const WifiIcon = ({ width = "44", height = "44" }) => {
  const navigation = useNavigation();

  return (
    <Svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Circle cx="20" cy="20" r="20" fill="white" />
      <Path
        d="M17.3638 27.1271L20.5001 30.2635L23.6365 27.1271C21.9062 25.3969 19.094 25.3969 17.3638 27.1271Z"
        fill="#09A5DB"
      />
      <Path
        d="M13.1817 22.9453L15.2727 25.0361C18.1581 22.1507 22.8418 22.1507 25.7272 25.0361L27.8181 22.9453C23.7775 18.9045 17.2225 18.9045 13.1817 22.9453Z"
        fill="#09A5DB"
      />
      <Path
        d="M9 18.7634L11.0909 20.8543C16.2869 15.6584 24.7132 15.6584 29.9091 20.8543L32 18.7634C25.6489 12.4122 15.3511 12.4122 9 18.7634Z"
        fill="#09A5DB"
      />
    </Svg>
  );
};

export default WifiIcon;
