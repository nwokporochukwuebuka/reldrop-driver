import BackBtn from "App/assets/icons/BackBtn";
import Colors from "App/config/Colors";
import { screenHeight, screenWidth } from "App/constants/Sizes";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ViewProps,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type LayoutProps = {
  children: any;
  ActionText: string;
  ActionTextDec: string;
  Action?: () => void;
  pageDesc?: string;
  pageDescParagraph?: string;
};

export default function OnboardLayout({
  children,
  ActionText,
  ActionTextDec,
  Action,
  pageDesc,
  pageDescParagraph,
}: LayoutProps) {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{
        flex: 1,
        backgroundColor: Colors.DEFAULT_WHITE,
      }}
    >
      <ScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <SafeAreaView style={style.body}>
            <View style={style.top}>
              <BackBtn onPress={undefined} />

              <Text
                style={{
                  fontSize: screenWidth(0.04),

                  color: Colors.DEFAULT_GREY,
                  fontFamily: "regular500",
                }}
                onPress={Action}
              >
                {ActionTextDec}{" "}
                <Text
                  style={{
                    color: Colors.LIGHT_BLUE,
                  }}
                >
                  {ActionText}
                </Text>
              </Text>
            </View>
            <View
              style={{
                marginVertical: screenHeight(0.06),
              }}
            >
              <Text
                style={{
                  fontSize: screenWidth(0.09),
                  fontFamily: "regular600",
                  color: Colors.LIGHT_BLUE,
                }}
              >
                {pageDesc}
              </Text>
              <Text
                style={{
                  fontSize: screenWidth(0.047),
                  fontFamily: "regular300",
                  color: Colors.DEFAULT_GREY,
                }}
              >
                {pageDescParagraph}
              </Text>
            </View>
            {children}
          </SafeAreaView>
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const style = StyleSheet.create({
  body: {
    backgroundColor: Colors.DEFAULT_WHITE,
    flex: 1,
    color: "#000",
    paddingHorizontal: screenWidth(0.06),
  },
  top: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: screenHeight(0.03),
  },
});
