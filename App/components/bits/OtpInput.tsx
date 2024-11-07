import { View, Text, StyleSheet } from "react-native";
import React from "react";
import OTPInputView from "@twotalltotems/react-native-otp-input";
import { screenHeight, screenWidth } from "App/constants/Sizes";

interface OtpInputTypes {
  formik?: {
    values?: { code?: string };
    setFieldValue?: (field: string, value: any) => void;
  };
  name?: string;
}

export default function OtpInput({ formik, name = "dd" }: OtpInputTypes) {
  return (
    <View>
      <OTPInputView
        style={{
          width: "100%",
          height: screenHeight(0.06),
        }}
        pinCount={6}
        // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
        // onCodeChanged = {code => { this.setState({code})}}
        autoFocusOnLoad
        codeInputFieldStyle={style.underlineStyleBase}
        codeInputHighlightStyle={style.underlineStyleHighLighted}
        onCodeFilled={(code: string) => {
          formik?.setFieldValue(name, code);
          console.log(`Code is ${code}, you are good to go!`);
        }}
      />
    </View>
  );
}

const style = StyleSheet.create({
  body: {
    color: "#000",
  },
  borderStyleBase: {
    width: 30,
    height: 45,
  },

  borderStyleHighLighted: {
    borderColor: "#F5F5F5",
  },

  underlineStyleBase: {
    borderWidth: 2,
    borderRadius: 8,
    width: screenWidth(0.12),
    height: screenHeight(0.06),
    fontSize: 16,
    color: "#36394A",
    borderColor: "#F5F5F5",
    backgroundColor: "#F5F5F5",
  },

  underlineStyleHighLighted: {
    borderColor: "#F5F5F5",
  },
});
