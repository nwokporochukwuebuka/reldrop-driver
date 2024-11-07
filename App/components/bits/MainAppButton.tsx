import {
  Dimensions,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useFonts, WorkSans_500Medium } from "@expo-google-fonts/work-sans";
import { screenHeight, screenWidth } from "App/constants/Sizes";
import * as Haptics from "expo-haptics";

type CustomButtonProps = {
  text?: string;
  textColor?: string;
  backgroundColor?: string;
  borderColor?: string;
  onPress?: () => void;
  disabled?: boolean;
  width?: any;
  height?: any;
  padding?: any;
  borderRadius?: any;
  fontSize?: any;
};

const MainAppButton: React.FC<CustomButtonProps> = ({
  backgroundColor,
  borderColor,
  borderRadius = 9,
  onPress,
  text,
  textColor,
  disabled,
  width = screenWidth(0.9),
  height = screenHeight(0.07),
  padding = screenWidth(0.006),
  fontSize = screenWidth(0.04),
}) => {
  const [fontsLoaded] = useFonts({
    WorkSans_500Medium,
  });

  return (
    <TouchableOpacity
      disabled={disabled}
      activeOpacity={0.5}
      onPress={() => {
        Haptics.selectionAsync();
        if (onPress) onPress();
      }}
      style={[
        styles.container,
        {
          backgroundColor,
          borderColor,
          width: width,
          height: height,
          padding,
          borderRadius: borderRadius,
          opacity: disabled ? 0.5 : 1,
        },
      ]}
    >
      <Text style={[styles.text, { color: textColor, fontSize: fontSize }]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default MainAppButton;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    justifyContent: "center",
    alignSelf: "flex-start",
  },
  text: {
    textAlign: "center",
    fontWeight: "500",
    fontFamily: "WorkSans_500Medium",
  },
});
