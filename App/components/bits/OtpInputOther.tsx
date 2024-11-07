import { screenHeight, screenWidth } from "App/constants/Sizes";
import React, { RefAttributes, useRef, useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";

interface OtpInputTypes {
  formik?: {
    values?: { code?: string };
    setFieldValue?: (field: string, value: any) => void;
  };
  name?: string;
}

export default function OTPInputOthers({ formik, name }: OtpInputTypes) {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputs = useRef<RefAttributes>([]);

  const focusNext = (index: number) => {
    if (index < 5 && inputs.current[index + 1]) {
      inputs.current[index + 1].focus();
    }
  };

  const focusPrevious = (index: number) => {
    if (index > 0 && inputs.current[index - 1]) {
      inputs.current[index - 1].focus();
    }
  };

  const handleChange = (text: number, index: number) => {
    const updatedOtp = [...otp];
    updatedOtp[index] = text;
    setOtp(updatedOtp);
    formik?.setFieldValue(name, updatedOtp?.join(""));

    if (text) {
      focusNext(index);
    } else {
      focusPrevious(index);
    }
  };

  return (
    <View style={styles.container}>
      {otp.map((value, index) => (
        <TextInput
          key={index}
          ref={(ref) => (inputs.current[index] = ref)}
          style={styles.input}
          keyboardType="number-pad"
          maxLength={1}
          onChangeText={(text) => handleChange(text, index)}
          value={otp[index]}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    alignSelf: "center",
  },
  input: {
    borderWidth: 2,
    borderRadius: 8,
    //padding: screenWidth(0.19),
    //padding: screenHeight(0.09),
    paddingVertical: screenHeight(0.02),
    paddingHorizontal: screenHeight(0.023),
    fontSize: screenWidth(0.04),
    color: "#36394A",
    borderColor: "#F5F5F5",
    backgroundColor: "#F5F5F5",
  },
});
