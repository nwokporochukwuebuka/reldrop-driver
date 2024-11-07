import { useNavigation } from "@react-navigation/native";
import { height } from "App/constants/Sizes";
import React from "react";
import { View } from "react-native";
import { Svg, G, Path, Defs, Rect, ClipPath, Circle } from "react-native-svg";
import { ViewProps } from "react-native-svg/lib/typescript/fabric/utils";

const BlackBox = ({ width = "44", height = "44" }) => {
  const navigation = useNavigation();

  return (
    <Svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M12.5 0C5.57927 0 0 5.57927 0 12.5C0 19.4207 5.57927 25 12.5 25C19.4207 25 25 19.4207 25 12.5C25 5.57927 19.4207 0 12.5 0ZM17.4085 15.9756C17.4085 16.7378 16.7988 17.378 16.0061 17.378H9.02439C8.26219 17.378 7.62195 16.7683 7.62195 15.9756L7.65244 9.02439C7.65244 8.26219 8.26219 7.62195 9.05488 7.62195H16.0061C16.7683 7.62195 17.4085 8.23171 17.4085 9.02439V15.9756Z"
        fill="#011B33"
      />
    </Svg>
  );
};

export default BlackBox;
