import { useNavigation } from "@react-navigation/native";
import { height } from "App/constants/Sizes";
import React from "react";
import { View } from "react-native";
import { Svg, G, Path, Defs, Rect, ClipPath, Circle } from "react-native-svg";
import { ViewProps } from "react-native-svg/lib/typescript/fabric/utils";

const ArrowRight = ({ width = "44", height = "44" }) => {
  return (
    <Svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Circle
        cx="10"
        cy="10"
        r="10"
        transform="rotate(-180 10 10)"
        fill="#F5F5F5"
      />
      <Path
        d="M12.6298 10.0136C12.6303 10.2828 12.5777 10.5494 12.4751 10.7982C12.3725 11.0471 12.2218 11.2733 12.0317 11.4638L8.68465 14.8109C8.6075 14.8881 8.50287 14.9314 8.39378 14.9314C8.28468 14.9314 8.18005 14.8881 8.1029 14.8109C8.02576 14.7338 7.98242 14.6291 7.98242 14.52C7.98242 14.4109 8.02576 14.3063 8.1029 14.2292L11.45 10.8821C11.6801 10.6517 11.8094 10.3393 11.8094 10.0136C11.8094 9.68789 11.6801 9.37552 11.45 9.14507L8.10291 5.79801C8.02576 5.72086 7.98242 5.61623 7.98242 5.50713C7.98242 5.39804 8.02576 5.29341 8.10291 5.21626C8.18005 5.13912 8.28468 5.09578 8.39378 5.09578C8.50287 5.09578 8.6075 5.13912 8.68465 5.21626L12.0317 8.56333C12.2218 8.75391 12.3725 8.98009 12.4751 9.22893C12.5777 9.47778 12.6303 9.74441 12.6298 10.0136Z"
        fill="black"
      />
    </Svg>
  );
};

export default ArrowRight;
