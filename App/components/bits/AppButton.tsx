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
  width?: string | number;
};

const AppButton: React.FC<CustomButtonProps> = ({
  backgroundColor,
  borderColor,
  onPress,
  text,
  textColor,
  width = "100%",
  disabled,
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
        { backgroundColor, borderColor, width, opacity: disabled ? 0.5 : 1 },
      ]}
    >
      <Text style={[styles.text, { color: textColor }]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: "auto",
    paddingVertical: 15,
    borderWidth: 1,
    borderRadius: 10,
    height: screenHeight(0.07),
    justifyContent: "center",
  },
  text: {
    textAlign: "center",
    fontWeight: "500",
    fontFamily: "WorkSans_500Medium",
    fontSize: screenWidth(0.04),
  },
});
