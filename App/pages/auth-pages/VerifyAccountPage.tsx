import Logo from "App/assets/icons/Logo";
import AppButton from "App/components/bits/AppButton";
import Colors from "App/config/Colors";
import { screenHeight, screenWidth } from "App/constants/Sizes";
import { Image } from "expo-image";
import React from "react";
import { View, Text, StyleSheet, ViewProps, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BackBtn from "App/assets/icons/backbtn.svg";
import OnboardLayout from "App/layouts/OnboardLayout";
import FormInput from "App/components/bits/FormInput";
import { useFormik } from "formik";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import OTPInputView from "@twotalltotems/react-native-otp-input";
import OtpInput from "App/components/bits/OtpInput";
import { AuthStackParamList } from "App/types/navigation";
import OTPInputOthers from "App/components/bits/OtpInputOther";
import { OtpSchema } from "App/constants/Schema";
import { useMutation } from "@tanstack/react-query";
import { ApiServiceAuth } from "App/service/auth-services";
import Loader from "App/components/Loader";
import ErrorCard from "App/components/ErrorCard";

interface Props {
  route?: any;
}

export default function VerifyAccountPage({ route }: Props) {
  const navigation = useNavigation<NavigationProp<AuthStackParamList>>();
  const { mutate, isPending, error } = useMutation({
    mutationFn: ApiServiceAuth.VerifyMutation,
    onSuccess: () => {
      navigation.navigate("AlmostThere");
    },
    onError: (error) => {
      console.log(error?.response, "errorerror");
      return;
    },
  });
  const formik = useFormik({
    initialValues: {
      otp: "",
      /*    phone_number: {
        country_code: 0,
        number: "string",
      }, */
    },
    validationSchema: OtpSchema,
    onSubmit: (values) =>
      mutate({
        email: route.params.email,
        otp: values.otp,
      }),
  });
  return (
    <OnboardLayout
      ActionText=""
      ActionTextDec=""
      pageDesc="Verification"
      pageDescParagraph="We have sent a 4-digit code to your email and phone number"
      children={
        <View style={style.body}>
          {isPending && <Loader />}
          <ErrorCard error={error} />

          <OTPInputOthers formik={formik} name="otp" />

          <View
            style={{
              marginTop: screenHeight(0.4),
            }}
          >
            <AppButton
              text="Continue"
              backgroundColor={Colors.DARKER_BLUE}
              textColor={Colors.DEFAULT_WHITE}
              borderColor={Colors.DARKER_BLUE}
              onPress={() => formik.handleSubmit()}
            />
          </View>
        </View>
      }
    />
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
    borderColor: "#03DAC6",
  },

  underlineStyleBase: {
    borderWidth: 2,
    borderRadius: 8,
    fontSize: 16,
    color: "#36394A",
  },

  underlineStyleHighLighted: {
    borderColor: "#03DAC6",
  },
});
