import { useNavigation } from "@react-navigation/native";
import { height } from "App/constants/Sizes";
import React from "react";
import { View } from "react-native";
import { Svg, G, Path, Defs, Rect, ClipPath, Circle } from "react-native-svg";
import { ViewProps } from "react-native-svg/lib/typescript/fabric/utils";

const DebitIcon = ({ width = "44", height = "44" }) => {
  const navigation = useNavigation();

  return (
    <Svg
      width="33"
      height="33"
      viewBox="0 0 33 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <G opacity="0.1">
        <Circle cx="16.4815" cy="16.4815" r="16.4815" fill="#F55656" />
        <Circle
          cx="16.4815"
          cy="16.4815"
          r="16.4815"
          fill="black"
          fill-opacity="0.2"
        />
      </G>
      <Path
        d="M22.9005 10.9884C22.9005 10.4775 22.4863 10.0634 21.9755 10.0634L13.6505 10.0634C13.1396 10.0634 12.7255 10.4775 12.7255 10.9884C12.7255 11.4993 13.1396 11.9134 13.6505 11.9134H21.0505V19.3134C21.0505 19.8243 21.4646 20.2384 21.9755 20.2384C22.4863 20.2384 22.9005 19.8243 22.9005 19.3134L22.9005 10.9884ZM12.4871 21.7849L22.6295 11.6425L21.3214 10.3343L11.1789 20.4768L12.4871 21.7849Z"
        fill="#F55656"
      />
      <Path
        d="M22.9005 10.9884C22.9005 10.4775 22.4863 10.0634 21.9755 10.0634L13.6505 10.0634C13.1396 10.0634 12.7255 10.4775 12.7255 10.9884C12.7255 11.4993 13.1396 11.9134 13.6505 11.9134H21.0505V19.3134C21.0505 19.8243 21.4646 20.2384 21.9755 20.2384C22.4863 20.2384 22.9005 19.8243 22.9005 19.3134L22.9005 10.9884ZM12.4871 21.7849L22.6295 11.6425L21.3214 10.3343L11.1789 20.4768L12.4871 21.7849Z"
        fill="black"
        fill-opacity="0.2"
      />
    </Svg>
  );
};

export default DebitIcon;
