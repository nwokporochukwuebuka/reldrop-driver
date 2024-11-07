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
import { useMutation } from "@tanstack/react-query";
import { ApiServiceAuth } from "App/service/auth-services";
import { LoginSchema } from "App/constants/Schema";
import Loader from "App/components/Loader";
import { Alert, Slide } from "native-base";
import FormPasswordInput from "App/components/bits/FormPasswordInput";
import ErrorCard from "App/components/ErrorCard";
import OrLine from "App/assets/images/Or";
import { getValueFor, save } from "App/hooks/SecureStore";
import { useAuth } from "App/context/global.context";

export default function LoginPage(
  props: React.JSX.IntrinsicAttributes &
    React.JSX.IntrinsicClassAttributes<View> &
    Readonly<ViewProps>
) {
  const navigation = useNavigation<NavigationProp<AuthStackParamList>>();
  const { login } = useAuth();

  const { mutate, isPending, error } = useMutation({
    mutationFn: ApiServiceAuth.LoginMutation,
    onSuccess: (data) => {
      setTimeout(() => {
        navigation.navigate("Onboarding");
      }, 2000);
      setTimeout(() => {
        login();
      }, 1000);
      save("token", data?.access_token);
    },
    onError: (error) => {
      console.log(error?.response, "errorerror");
      return;
    },
  });
  const formik = useFormik({
    initialValues: {
      email: "",
      /*    phone_number: {
        country_code: 0,
        number: "string",
      }, */
      password: "",
    },
    validationSchema: LoginSchema,
    onSubmit: (values) => mutate(values),
  });
  return (
    <OnboardLayout
      ActionText=""
      ActionTextDec=""
      pageDesc="Login"
      pageDescParagraph="Enter your details to access 
your account"
      children={
        <View style={style.body}>
          <ErrorCard error={error} />
          {isPending && <Loader />}
          <FormInput
            label="Email Address"
            placeholder="Enter your email address"
            name="email"
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
          {/* <Text> {JSON.stringify(error)}</Text>*/}
          <View
            style={{
              marginTop: screenHeight(0.08),
            }}
          >
            <AppButton
              text="Continue"
              backgroundColor={Colors.DARKER_BLUE}
              textColor={Colors.DEFAULT_WHITE}
              borderColor={Colors.DARKER_BLUE}
              onPress={() => {
                formik.handleSubmit();
              }}
            />
            <OrLine />

            <Text
              style={{
                fontSize: screenWidth(0.043),
                color: Colors.DEFAULT_GREY,
                fontFamily: "regular500",
                textAlign: "center",
              }}
            >
              Don't have an account?{" "}
              <Text
                onPress={() => {
                  navigation.navigate("CreateAccount");
                }}
                style={{
                  color: Colors.DARKER_BLUE,
                }}
              >
                Sign Up
              </Text>
            </Text>
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
