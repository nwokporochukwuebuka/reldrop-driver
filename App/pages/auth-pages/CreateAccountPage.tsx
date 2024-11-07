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
import OrLine2 from "App/assets/images/Or2";
import FormNumberInput from "App/components/bits/FormNumberInput";
import { ApiServiceAuth } from "App/service/auth-services";
import { useMutation } from "@tanstack/react-query";
import { RegisterSchema } from "App/constants/Schema";
import ErrorCard from "App/components/ErrorCard";
import Loader from "App/components/Loader";

export default function CreateAccountPage(
  props: React.JSX.IntrinsicAttributes &
    React.JSX.IntrinsicClassAttributes<View> &
    Readonly<ViewProps>
) {
  const navigation = useNavigation<NavigationProp<AuthStackParamList>>();
  const { mutate, isPending, error } = useMutation({
    mutationFn: ApiServiceAuth.RegisterMutation,
    onSuccess: () => {
      navigation.navigate("VerifyAccount", { email: formik.values.email }); //console.log(data);
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
      phone_number: "",
    },
    validationSchema: RegisterSchema,
    onSubmit: (values) =>
      mutate({
        email: values.email,
        phone_number: {
          country_code: 234,
          number: values.phone_number,
        },
        account_type: "rider",
      }),
  });
  return (
    <OnboardLayout
      ActionText="Rider"
      ActionTextDec="Become a"
      pageDesc="Create Account"
      pageDescParagraph="Enter your email address & mobile number"
      children={
        <View style={style.body}>
          <ErrorCard error={error} />
          <Text>{JSON.stringify(error?.response)}</Text>
          {isPending && <Loader />}

          <FormInput
            label="Email Address"
            placeholder="Enter your email address"
            name="email"
            width="100%"
            formik={formik}
          />
          <FormNumberInput
            label="Phone Number"
            placeholder="Enter your phone number"
            name="phone_number"
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
              onPress={() => {
                formik.handleSubmit();
              }}
            />
            <OrLine2 />
            <Text
              style={{
                fontSize: screenWidth(0.043),
                color: Colors.DEFAULT_GREY,
                fontFamily: "regular500",
                textAlign: "center",
              }}
            >
              Already have an account?{" "}
              <Text
                onPress={() => {
                  navigation.navigate("Login");
                }}
                style={{
                  color: Colors.DARKER_BLUE,
                }}
              >
                Login
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
