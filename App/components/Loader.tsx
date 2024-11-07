import {
  View,
  Text,
  Modal,
  Animated,
  Easing,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useRef } from "react";
import { screenSize } from "App/constants/Sizes";
import Colors from "App/config/Colors";

const Loader = () => {
  const scaleValue = useRef(new Animated.Value(1)).current; // Initial scale value is 1

  useEffect(() => {
    const animateRing = () => {
      Animated.sequence([
        Animated.timing(scaleValue, {
          toValue: 1.5, // Increase size to 1.5 times
          duration: 1000, // Duration of the animation
          easing: Easing.inOut(Easing.ease), // Easing function for smooth effect
          useNativeDriver: true, // Use native driver for better performance
        }),
        Animated.timing(scaleValue, {
          toValue: 1, // Return size back to normal
          duration: 1000, // Duration of the animation
          easing: Easing.inOut(Easing.ease), // Easing function for smooth effect
          useNativeDriver: true, // Use native driver for better performance
        }),
      ]).start(() => animateRing()); // Loop the animation
    };

    animateRing(); // Start the animation on component mount
  }, [scaleValue]);

  return (
    <Modal transparent={true}>
      <View
        style={{
          flex: 1,
          zIndex: 7,
          ...screenSize(1, 1),
          backgroundColor: "#13131390",
          position: "absolute",
          top: 0,
          left: 0,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            elevation: 5,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ActivityIndicator size={"large"} color={Colors.DEFAULT_WHITE} />
          <Text
            style={{
              marginTop: 10,
              color: Colors.DEFAULT_WHITE,
            }}
          >
            Please wait...
          </Text>
        </View>
      </View>
    </Modal>
  );
};

export default Loader;
