import Colors from "App/config/Colors";
import React from "react";
import { View } from "react-native";
import { Svg, G, Path, Defs, Rect, ClipPath, Circle } from "react-native-svg";

const PlaceOrderButton = ({
  width = "28",
  height = "28",
  fill = Colors.OTHER_GREY,
}) => {
  return (
    <Svg
      width="31"
      height="32"
      viewBox="0 0 31 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M30.5408 16C30.5408 24.3589 23.7645 31.1351 15.4056 31.1351C7.04674 31.1351 0.270508 24.3589 0.270508 16C0.270508 7.6411 7.04674 0.864868 15.4056 0.864868C23.7645 0.864868 30.5408 7.6411 30.5408 16Z"
        fill="white"
      />
      <Path
        d="M19.7738 11.1177H13.1827C12.7782 11.1177 12.4503 11.4456 12.4503 11.85C12.4503 12.2545 12.7782 12.5824 13.1827 12.5824H18.0058L10.7675 19.8207L11.8031 20.8564L19.0414 13.6181L19.0414 18.4412C19.0414 18.8456 19.3693 19.1735 19.7738 19.1735C20.1782 19.1735 20.5061 18.8456 20.5061 18.4412L20.5061 11.85C20.5061 11.4456 20.1782 11.1177 19.7738 11.1177Z"
        fill="#011B33"
      />
    </Svg>
  );
};

export default PlaceOrderButton;
