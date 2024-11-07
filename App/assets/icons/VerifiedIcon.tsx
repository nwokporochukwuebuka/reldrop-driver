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

const VerifiedIcon = ({ width = "34", height = "34", onPress }: BackProp) => {
  const navigation = useNavigation();

  return (
    <Svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M19.5143 8.82156L18.1503 7.45774C17.8265 7.134 17.5612 6.49423 17.5612 6.03543V4.10665C17.5612 3.18914 16.8117 2.4396 15.8944 2.43911H13.9649C13.5066 2.43911 12.8661 2.17333 12.5423 1.84983L11.1785 0.486016C10.5305 -0.162005 9.46946 -0.162005 8.82144 0.486016L7.45762 1.85081C7.13359 2.17455 6.49235 2.4396 6.03506 2.4396H4.10628C3.18999 2.4396 2.43948 3.18914 2.43948 4.10665V6.03548C2.43948 6.49248 2.17423 7.13425 1.85044 7.45779L0.486382 8.82161C-0.162127 9.46963 -0.162127 10.5307 0.486382 11.1797L1.85044 12.5435C2.17443 12.8673 2.43948 13.5088 2.43948 13.9658V15.8947C2.43948 16.8112 3.18999 17.5617 4.10628 17.5617H6.03511C6.49338 17.5617 7.13388 17.827 7.45767 18.1505L8.82149 19.5148C9.46951 20.1623 10.5305 20.1623 11.1786 19.5148L12.5424 18.1505C12.8664 17.8268 13.5067 17.5617 13.9649 17.5617H15.8945C16.8118 17.5617 17.5613 16.8112 17.5613 15.8947V13.9658C17.5613 13.5068 17.8268 12.8671 18.1503 12.5435L19.5144 11.1797C20.1619 10.5307 20.1619 9.46958 19.5143 8.82156ZM8.67695 13.7505L4.99958 10.0726L6.17813 8.89432L8.67725 11.3934L13.8217 6.25023L14.9999 7.42854L8.67695 13.7505Z"
        fill="#09A5DB"
      />
    </Svg>
  );
};

export default VerifiedIcon;
