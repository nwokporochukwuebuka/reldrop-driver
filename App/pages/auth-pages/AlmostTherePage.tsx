import Logo from "App/assets/icons/Logo";
import AppButton from "App/components/bits/AppButton";
import Colors from "App/config/Colors";
import { screenHeight, screenWidth } from "App/constants/Sizes";
import { Image } from "expo-image";
import React from "react";
import { View, Text, StyleSheet, ViewProps } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BackBtn from "App/assets/icons/backbtn.svg";
import OnboardLayout from "App/layouts/OnboardLayout";
import FormInput from "App/components/bits/FormInput";
import { useFormik } from "formik";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { AuthStackParamList } from "App/types/navigation";
import Loader from "App/components/Loader";
import { ApiServiceAuth } from "App/service/auth-services";
import { CompleteSignUpSchema } from "App/constants/Schema";
import { useMutation } from "@tanstack/react-query";
import FormPasswordInput from "App/components/bits/FormPasswordInput";
import ErrorCard from "App/components/ErrorCard";
interface Props {
  route?: any;
}
export default function AlmostTherePage({ route }: Props) {
  const navigation = useNavigation<NavigationProp<AuthStackParamList>>();
  const { mutate, isPending, error } = useMutation({
    mutationFn: ApiServiceAuth.CompleteCreationMutation,
    onSuccess: () => {
      navigation.navigate("SuccessFulPage", {
        nextPage: "Login",
        successTitle: "And that's it!",
        successSubTitle: "You can now log in",
      });
    },
    onError: (error) => {
      console.log(error?.response, "errorerror");
      return;
    },
  });
  const formik = useFormik({
    initialValues: {
      email: "",
      full_name: "",
      password: "",
      confirm_password: "",
    },
    validationSchema: CompleteSignUpSchema,
    onSubmit: (values) =>
      mutate({
        email: "adekoyadaniel53@gmail.com" || route.params.email,
        full_name: values.full_name,
        password: values.password,
        confirm_password: values.confirm_password,
      }),
  });
  return (
    <OnboardLayout
      ActionText=""
      ActionTextDec=""
      pageDesc="Almost there..."
      pageDescParagraph="Input your Full name and create a secure password"
      children={
        <View style={style.body}>
          {isPending && <Loader />}
          <ErrorCard error={error} />

          <FormInput
            label="Full Name"
            placeholder="Enter your email address"
            name="full_name"
            width="100%"
            formik={formik}
          />
          <FormPasswordInput
            label="Password"
            placeholder="Enter your email address"
            name="password"
            width="100%"
            formik={formik}
          />
          <FormPasswordInput
            label="Confirm password"
            placeholder="Enter your email address"
            name="confirm_password"
            width="100%"
            formik={formik}
          />
          <View
            style={{
              marginTop: screenHeight(0.08),
            }}
          >
            <Text
              style={{
                color: Colors.DEFAULT_GREY,
                fontFamily: "regular500",
                textAlign: "center",
              }}
            >
              By proceeding, you agree to our
            </Text>
            <Text
              style={{
                color: Colors.DEFAULT_GREY,
                textAlign: "center",
                fontFamily: "regular500",
                marginBottom: screenHeight(0.02),
              }}
            >
              <Text
                style={{
                  color: Colors.DARKER_BLUE,
                  fontFamily: "regular500",
                }}
              >
                Terms & Conditions
              </Text>{" "}
              and{" "}
              <Text
                style={{
                  color: Colors.DARKER_BLUE,
                  fontFamily: "regular500",
                }}
              >
                Privacy policy
              </Text>{" "}
            </Text>
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
});
