import Colors from "App/config/Colors";
import React from "react";
import { View } from "react-native";
import { Svg, G, Path, Defs, Rect, ClipPath, Circle } from "react-native-svg";

const HomeIcon = ({
  width = "28",
  height = "28",
  fill = Colors.OTHER_GREY,
  onPress = () => {},
}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 29 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onPress={onPress}
    >
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11.9136 0.847129C13.5644 -0.282376 15.7394 -0.282376 17.3902 0.847129L26.396 7.00898C27.7171 7.91287 28.507 9.41044 28.507 11.0112V22.6738C28.507 25.352 26.3359 27.5231 23.6577 27.5231H5.64614C2.96796 27.5231 0.796875 25.352 0.796875 22.6738V11.0112C0.796875 9.41044 1.58678 7.91287 2.90785 7.00898L11.9136 0.847129ZM11.1882 21.2883C10.8056 21.2883 10.4954 21.5985 10.4954 21.981C10.4954 22.3636 10.8056 22.6738 11.1882 22.6738H18.1157C18.4982 22.6738 18.8084 22.3636 18.8084 21.981C18.8084 21.5985 18.4982 21.2883 18.1157 21.2883H11.1882Z"
        fill={fill}
      />
    </Svg>
  );
};

export default HomeIcon;
