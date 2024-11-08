import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { Image } from "expo-image";
import { screenHeight } from "App/constants/Sizes";
import { useNavigation } from "@react-navigation/native";

export default function Splash() {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Onboarding");
    }, 2000);
  }, []);
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Image
        style={{
          width: "100%",
          height: screenHeight(1),
          alignSelf: "center",
        }}
        source={require("App/assets/images/splash.png")}
      />
    </View>
  );
}
