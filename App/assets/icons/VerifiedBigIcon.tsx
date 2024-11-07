import { useNavigation } from "@react-navigation/native";
import { height } from "App/constants/Sizes";
import React from "react";
import { View } from "react-native";
import { Svg, G, Path, Defs, Rect, ClipPath, Circle } from "react-native-svg";
import { ViewProps } from "react-native-svg/lib/typescript/fabric/utils";

interface BackProp {
  width?: any;
  height?: any;
  onPress?: any;
}

const VerifiedBigIcon = ({
  width = "34",
  height = "34",
  onPress,
}: BackProp) => {
  const navigation = useNavigation();

  return (
    <Svg
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <G clip-path="url(#clip0_59_2099)">
        <Rect
          x="4.55859"
          y="5.69781"
          width="15.9545"
          height="13.6753"
          fill="white"
        />
        <Path
          d="M24.4622 11.058L22.7523 9.34843C22.3465 8.9426 22.0139 8.14062 22.0139 7.56548V5.14766C22.0139 3.99751 21.0744 3.05792 19.9245 3.05731H17.5057C16.9312 3.05731 16.1283 2.72414 15.7225 2.31862L14.0128 0.609002C13.2005 -0.203326 11.8705 -0.203326 11.0581 0.609002L9.34852 2.31984C8.94232 2.72567 8.1385 3.05792 7.56526 3.05792H5.14744C3.99882 3.05792 3.05801 3.99751 3.05801 5.14766V7.56554C3.05801 8.13841 2.72551 8.9429 2.31963 9.34849L0.609705 11.0581C-0.203235 11.8704 -0.203235 13.2005 0.609705 14.0141L2.31963 15.7237C2.72576 16.1295 3.05801 16.9337 3.05801 17.5067V19.9245C3.05801 21.0735 3.99882 22.0143 5.14744 22.0143H7.56533C8.13979 22.0143 8.94269 22.3468 9.34858 22.7524L11.0582 24.4626C11.8705 25.2743 13.2006 25.2743 14.0129 24.4626L15.7225 22.7524C16.1287 22.3465 16.9313 22.0143 17.5058 22.0143H19.9246C21.0744 22.0143 22.014 21.0735 22.014 19.9245V17.5067C22.014 16.9313 22.3468 16.1293 22.7524 15.7237L24.4623 14.0141C25.274 13.2005 25.274 11.8704 24.4622 11.058ZM10.877 17.2367L6.26723 12.6263L7.74461 11.1492L10.8774 14.282L17.3262 7.83474L18.8032 9.31182L10.877 17.2367Z"
          fill="#09A5DB"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_59_2099">
          <Rect width="25.0714" height="25.0714" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default VerifiedBigIcon;
