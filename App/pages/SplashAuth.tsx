import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { Image } from "expo-image";
import { screenHeight } from "App/constants/Sizes";
import { useNavigation } from "@react-navigation/native";
import LottieView from "lottie-react-native";

export default function SplashAuth() {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("AuthNavigator");
    }, 2000);
  }, []);
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <LottieView
        source={{
          uri: "https://lottie.host/8ff5e659-cef4-43b2-9fa3-b3e35f8b99f3/vEkOr5NZGU.json",
        }}
        style={{ width: "50%", height: "50%" }}
        autoPlay
        loop={true}
        //onAnimationFinish={() => onFinish(true)}
      />
    </View>
  );
}
