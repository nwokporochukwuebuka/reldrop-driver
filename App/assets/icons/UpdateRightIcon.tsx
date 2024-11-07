import { useNavigation } from "@react-navigation/native";
import { height } from "App/constants/Sizes";
import React from "react";
import { View } from "react-native";
import { Svg, G, Path, Defs, Rect, ClipPath, Circle } from "react-native-svg";
import { ViewProps } from "react-native-svg/lib/typescript/fabric/utils";

const UpdateRightIcon = ({ width = "44", height = "44" }) => {
  const navigation = useNavigation();

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
        fill="white"
      />
      <Path
        d="M12.6298 10.0137C12.6303 10.2829 12.5777 10.5495 12.4751 10.7984C12.3725 11.0472 12.2218 11.2734 12.0317 11.464L8.68465 14.811C8.6075 14.8882 8.50287 14.9315 8.39378 14.9315C8.28468 14.9315 8.18005 14.8882 8.1029 14.811C8.02576 14.7339 7.98242 14.6293 7.98242 14.5202C7.98242 14.4111 8.02576 14.3064 8.1029 14.2293L11.45 10.8822C11.6801 10.6518 11.8094 10.3394 11.8094 10.0137C11.8094 9.68802 11.6801 9.37564 11.45 9.14519L8.10291 5.79813C8.02576 5.72098 7.98242 5.61635 7.98242 5.50726C7.98242 5.39816 8.02576 5.29353 8.10291 5.21639C8.18005 5.13924 8.28468 5.0959 8.39378 5.0959C8.50287 5.0959 8.6075 5.13924 8.68465 5.21639L12.0317 8.56345C12.2218 8.75403 12.3725 8.98021 12.4751 9.22905C12.5777 9.4779 12.6303 9.74453 12.6298 10.0137Z"
        fill="black"
      />
    </Svg>
  );
};

export default UpdateRightIcon;
