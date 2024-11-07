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

const VerifiedBigInvertIcon = ({
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
      <G clip-path="url(#clip0_59_2104)">
        <Rect
          x="4.55859"
          y="5.8634"
          width="15.9545"
          height="13.6753"
          fill="white"
        />
        <Path
          d="M24.4622 11.2236L22.7523 9.51401C22.3465 9.10819 22.0139 8.3062 22.0139 7.73107V5.31324C22.0139 4.16309 21.0744 3.22351 19.9245 3.2229H17.5057C16.9312 3.2229 16.1283 2.88973 15.7225 2.48421L14.0128 0.77459C13.2005 -0.0377377 11.8705 -0.0377377 11.0581 0.77459L9.34852 2.48543C8.94232 2.89126 8.1385 3.22351 7.56526 3.22351H5.14744C3.99882 3.22351 3.05801 4.16309 3.05801 5.31324V7.73113C3.05801 8.304 2.72551 9.10849 2.31963 9.51407L0.609705 11.2237C-0.203235 12.036 -0.203235 13.3661 0.609705 14.1797L2.31963 15.8893C2.72576 16.2951 3.05801 17.0993 3.05801 17.6722V20.0901C3.05801 21.2391 3.99882 22.1799 5.14744 22.1799H7.56533C8.13979 22.1799 8.94269 22.5124 9.34858 22.9179L11.0582 24.6282C11.8705 25.4399 13.2006 25.4399 14.0129 24.6282L15.7225 22.9179C16.1287 22.5121 16.9313 22.1799 17.5058 22.1799H19.9246C21.0744 22.1799 22.014 21.2391 22.014 20.0901V17.6722C22.014 17.0969 22.3468 16.2949 22.7524 15.8893L24.4623 14.1797C25.274 13.3661 25.274 12.036 24.4622 11.2236ZM10.877 17.4023L6.26723 12.7919L7.74461 11.3148L10.8774 14.4476L17.3262 8.00033L18.8032 9.47741L10.877 17.4023Z"
          fill="#E1E1E1"
        />
      </G>
      <Defs>
        <clipPath id="clip0_59_2104">
          <Rect
            width="25.0714"
            height="25.0714"
            fill="white"
            transform="translate(0 0.165527)"
          />
        </clipPath>
      </Defs>
    </Svg>
  );
};

export default VerifiedBigInvertIcon;
