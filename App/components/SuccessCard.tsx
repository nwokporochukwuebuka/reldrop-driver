import BikeIcon from "App/assets/icons/BikeIcon";
import Colors from "App/config/Colors";
import { screenHeight, screenWidth } from "App/constants/Sizes";
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ViewProps, Platform } from "react-native";
import MainAppButton from "./bits/MainAppButton";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { OrdersStackParamList } from "App/types/navigation";
import { Alert, Slide } from "native-base";

interface ItemProps {
  error?: {
    response: {
      data: {
        detail?: any;
      };
    };
    message?: any;
  };
}

export default function SuccessCard({ error }: ItemProps) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (error?.message || error?.response) {
      setShow(true);
    }
    setTimeout(() => {
      setShow(false);
    }, 5000);
  }, [error]);
  return (
    <Slide in={show} placement="top">
      <Alert justifyContent="left" status="success" safeAreaTop={10}>
        <Text
          style={{
            color: Colors.DARK_GREY,
          }}
        >
          {error?.message || error?.response?.data?.detail}
        </Text>
      </Alert>
    </Slide>
  );
}

const styles = StyleSheet.create({
  body: {
    paddingVertical: screenHeight(0.012),
    paddingHorizontal: screenWidth(0.04),
    borderRadius: 9,
  },
  date: {
    color: Colors.DEFAULT_GREY,
    fontSize: screenWidth(0.043),
    fontFamily: "regular400",
  },
  status: {
    fontSize: screenWidth(0.025),
  },
  address: {
    fontSize: screenWidth(0.028),
    color: Colors.DEFAULT_GREY,
    marginTop: screenHeight(0.006),
    marginBottom: screenHeight(0.02),
  },
  slide: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: screenWidth(0.044),
  },
  slide2: {
    flexDirection: "row",
    alignItems: "center",
    gap: screenWidth(0.044),
  },
  slideBtns: {
    flexDirection: "row",
    marginTop: screenHeight(0.002),
    alignItems: "center",
    gap: screenWidth(0.022),
  },
  liveIcon: {
    backgroundColor: Colors.DEFAULT_WHITE,
    alignSelf: "flex-start",
    borderRadius: 999,
    paddingHorizontal: screenWidth(0.001),
    paddingVertical: screenWidth(0.001),
  },
});
