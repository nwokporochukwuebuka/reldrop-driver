import { NavigationProp, useNavigation } from "@react-navigation/native";
import Logo from "App/assets/icons/Logo";
import AppButton from "App/components/bits/AppButton";
import Colors from "App/config/Colors";
import { screenHeight, screenWidth } from "App/constants/Sizes";
import { AuthStackParamList } from "App/types/navigation";
import { Image } from "expo-image";
import React from "react";
import { View, Text, StyleSheet, ViewProps } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function OnboardPage(
  props: React.JSX.IntrinsicAttributes &
    React.JSX.IntrinsicClassAttributes<View> &
    Readonly<ViewProps>
) {
  const navigation = useNavigation<NavigationProp<AuthStackParamList>>();
  return (
    <SafeAreaView {...props} style={style.body}>
      <View
        style={{
          alignItems: "center",
          width: "100%",
        }}
      >
        <View
          style={{
            alignItems: "center",
          }}
        >
          <Logo width={screenWidth(0.33)} height={screenWidth(0.3)} />
        </View>
        <Image
          style={{
            width: screenWidth(0.73),
            height: screenWidth(0.73),
            marginVertical: screenHeight(0.03),
          }}
          source={require("App/assets/images/onboardImg.png")}
          resizeMode="contain"
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
              fontSize: screenWidth(0.086),
            }}
          >
            Send & receive
          </Text>
          <Text
            style={{
              fontFamily: "regular600",
              fontSize: screenWidth(0.086),
            }}
          >
            parcels{" "}
            <Text
              style={{
                fontFamily: "italic600",
                color: Colors.LIGHT_BLUE,
              }}
            >
              easily
            </Text>
          </Text>
        </View>
        <View
          style={{
            alignItems: "center",
            flex: 1,
            gap: screenHeight(0.02),
            width: "100%",
          }}
        >
          <AppButton
            text="Join Reldrop"
            backgroundColor={Colors.DARKER_BLUE}
            textColor={Colors.DEFAULT_WHITE}
            borderColor={Colors.DARKER_BLUE}
            onPress={() => navigation.navigate("CreateAccount")}
          />
          <AppButton
            text="Login"
            onPress={() => navigation.navigate("Login")}
          />
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
    color: "#000",
    paddingHorizontal: screenWidth(0.04),
  },
});
