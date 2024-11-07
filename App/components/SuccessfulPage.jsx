import { NavigationProp, useNavigation } from "@react-navigation/native";
import Logo from "App/assets/icons/Logo";
import SuccessMark from "App/assets/icons/SuccessMark";
import AppButton from "App/components/bits/AppButton";
import Colors from "App/config/Colors";
import { screenHeight, screenWidth } from "App/constants/Sizes";
import { Image } from "expo-image";
import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SuccessFulPage({ route }) {
  console.log(route);

  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate(route.params.nextPage);
    }, 4000);
  }, []);
  return (
    <SafeAreaView style={style.body}>
      <View
        style={{
          alignItems: "center",
          width: "100%",
        }}
      >
        <Image
          style={{
            width: screenWidth(0.73),
            height: screenWidth(0.73),
            marginVertical: screenHeight(0.03),
          }}
          source={require("App/assets/icons/SuccessMark.png")}
        />
        <View
          style={{
            alignItems: "center",
            marginBottom: screenHeight(0.1),
          }}
        >
          <Text
            style={{
              fontFamily: "regular600",
              fontSize: screenWidth(0.096),
              marginBottom: screenHeight(0.01),
              color: Colors.LIGHT_BLUE,
            }}
          >
            {route.params.successTitle}
          </Text>
          <Text
            style={{
              fontFamily: "regular300",
              fontSize: screenWidth(0.046),
              color: Colors.OTHER_GREY,
            }}
          >
            {route.params.successSubTitle}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  body: {
    backgroundColor: "#fff",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    color: "#000",
    paddingHorizontal: screenWidth(0.04),
  },
});
