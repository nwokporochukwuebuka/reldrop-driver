import { useNavigation } from "@react-navigation/native";
import { height } from "App/constants/Sizes";
import React from "react";
import { View } from "react-native";
import { Svg, G, Path, Defs, Rect, ClipPath, Circle } from "react-native-svg";
import { ViewProps } from "react-native-svg/lib/typescript/fabric/utils";

const DropDownIcon = ({ width = "44", height = "44" }) => {
  const navigation = useNavigation();

  return (
    <Svg
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Circle
        cx="13"
        cy="13"
        r="13"
        transform="rotate(-90 13 13)"
        fill="white"
      />
      <Path
        d="M12.981 16.4191C12.6311 16.4197 12.2845 16.3514 11.961 16.2179C11.6375 16.0845 11.3435 15.8886 11.0957 15.6415L6.74452 11.2903C6.64423 11.19 6.58789 11.054 6.58789 10.9122C6.58789 10.7704 6.64423 10.6344 6.74452 10.5341C6.84481 10.4338 6.98082 10.3774 7.12265 10.3774C7.26448 10.3774 7.4005 10.4338 7.50078 10.5341L11.852 14.8853C12.1515 15.1845 12.5576 15.3525 12.981 15.3525C13.4044 15.3525 13.8105 15.1845 14.1101 14.8853L18.4613 10.5341C18.5616 10.4338 18.6976 10.3774 18.8394 10.3774C18.9813 10.3774 19.1173 10.4338 19.2176 10.5341C19.3179 10.6344 19.3742 10.7704 19.3742 10.9122C19.3742 11.054 19.3179 11.19 19.2176 11.2903L14.8664 15.6415C14.6186 15.8886 14.3246 16.0845 14.0011 16.2179C13.6776 16.3514 13.331 16.4197 12.981 16.4191Z"
        fill="black"
      />
    </Svg>
  );
};

export default DropDownIcon;
