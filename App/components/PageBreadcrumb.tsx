import BikeIcon from "App/assets/icons/BikeIcon";
import Colors from "App/config/Colors";
import { screenHeight, screenWidth } from "App/constants/Sizes";
import React from "react";
import { View, Text, StyleSheet, ViewProps, Platform } from "react-native";
import MainAppButton from "./bits/MainAppButton";
import BackBtn from "App/assets/icons/BackBtn";

interface ItemProps {
  page?: string;
  onBackBtnPress?: () => void;
  leftEnd?: amy;
}

export default function PageBreadcrumb({
  page = "Page",
  onBackBtnPress,
  leftEnd,
}: ItemProps) {
  return (
    <View style={styles.top}>
      <BackBtn onPress={onBackBtnPress ? onBackBtnPress : undefined} />
      <Text
        style={{
          fontSize: screenWidth(0.045),
          color: Colors.MAIN_BLACK,
          fontFamily: "regular500",
        }}
      >
        {page}
      </Text>
      {leftEnd ? (
        leftEnd
      ) : (
        <Text
          style={{
            color: Colors.MAIN_BLACK,
            fontFamily: "regular500",
          }}
        >
          ㅤㅤㅤ
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  top: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: screenHeight(0.02),
    //backgroundColor: Colors.DEFAULT_GREEN,
  },
});
