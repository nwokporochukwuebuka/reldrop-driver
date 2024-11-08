import { useNavigation } from "@react-navigation/native";
import { height } from "App/constants/Sizes";
import React from "react";
import { View } from "react-native";
import { Svg, G, Path, Defs, Rect, ClipPath, Circle } from "react-native-svg";
import { ViewProps } from "react-native-svg/lib/typescript/fabric/utils";

const CreditIcon = ({ width = "44", height = "44" }) => {
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
        <Circle
          cx="16.4814"
          cy="16.5185"
          r="16.4815"
          transform="rotate(-180 16.4814 16.5185)"
          fill="#51EDBE"
        />
        <Circle
          cx="16.4814"
          cy="16.5185"
          r="16.4815"
          transform="rotate(-180 16.4814 16.5185)"
          fill="black"
          fill-opacity="0.2"
        />
      </G>
      <Path
        d="M10.0624 22.0126C10.0624 22.5234 10.4766 22.9376 10.9874 22.9376L19.3124 22.9376C19.8233 22.9376 20.2374 22.5234 20.2374 22.0126C20.2374 21.5017 19.8233 21.0876 19.3124 21.0876L11.9124 21.0876L11.9124 13.6876C11.9124 13.1767 11.4983 12.7626 10.9874 12.7626C10.4766 12.7626 10.0624 13.1767 10.0624 13.6876L10.0624 22.0126ZM20.4758 11.216L10.3334 21.3585L11.6415 22.6666L21.784 12.5242L20.4758 11.216Z"
        fill="#6CBA1A"
      />
      <Path
        d="M10.0624 22.0126C10.0624 22.5234 10.4766 22.9376 10.9874 22.9376L19.3124 22.9376C19.8233 22.9376 20.2374 22.5234 20.2374 22.0126C20.2374 21.5017 19.8233 21.0876 19.3124 21.0876L11.9124 21.0876L11.9124 13.6876C11.9124 13.1767 11.4983 12.7626 10.9874 12.7626C10.4766 12.7626 10.0624 13.1767 10.0624 13.6876L10.0624 22.0126ZM20.4758 11.216L10.3334 21.3585L11.6415 22.6666L21.784 12.5242L20.4758 11.216Z"
        fill="black"
        fill-opacity="0.2"
      />
    </Svg>
  );
};

export default CreditIcon;
