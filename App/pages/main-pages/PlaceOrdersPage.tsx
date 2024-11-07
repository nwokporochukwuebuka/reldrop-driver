import { Ionicons } from "@expo/vector-icons";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import Logo from "App/assets/icons/Logo";
import AppButton from "App/components/bits/AppButton";
import FormInput from "App/components/bits/FormInput";
import PageBreadcrumb from "App/components/PageBreadcrumb";
import Colors from "App/config/Colors";
import { screenHeight, screenWidth } from "App/constants/Sizes";
import { MainStackParamList } from "App/types/navigation";
import { Image } from "expo-image";
import { useFormik } from "formik";
import React, { useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ViewProps,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
  useWindowDimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Actionsheet,
  Box,
  Center,
  CheckIcon,
  PresenceTransition,
  Select,
  useDisclose,
} from "native-base";
import FormSelect from "App/components/bits/FormSelect";
import LocationIcon from "App/assets/icons/LocationIcon";
import BlackBox from "App/assets/icons/BlackBox";
import FormRadio from "App/components/bits/FormRadio";
import VerifiedIcon from "App/assets/icons/VerifiedIcon";
import FormFileInput from "App/components/bits/FormFileInput";
import { Line } from "react-native-svg";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import PlaceOrderStep1 from "App/pages/order-pages/PlaceOrderStep1";
import PlaceOrderStep2 from "App/pages/order-pages/PlaceOrderStep2";
import PlaceOrderStep3 from "App/pages/order-pages/PlaceOrderStep3";
import MainAppButton from "App/components/bits/MainAppButton";

export default function PlaceOrdersPage(
  props: React.JSX.IntrinsicAttributes &
    React.JSX.IntrinsicClassAttributes<View> &
    Readonly<ViewProps>
) {
  const navigation = useNavigation<NavigationProp<MainStackParamList>>();
  const formik = useFormik({
    initialValues: { email: "", password: "" },
    onSubmit: (values) =>
      alert(`Email: ${values.email}, Password: ${values.password}`),
  });
  const [step, setStep] = useState(0);
  const scrollRef = useRef<ScrollView>();
  const { isOpen, onOpen, onClose } = useDisclose();

  console.log(useWindowDimensions().fontScale);
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{
        flex: 1,
        backgroundColor: Colors.DEFAULT_WHITE,
      }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView {...props} style={styles.body}>
          <PageBreadcrumb
            page="Place Orders"
            onBackBtnPress={
              step === 0
                ? undefined
                : () => {
                    setStep((prev) => prev - 1);
                    scrollRef.current?.scrollTo({ y: 0 });
                  }
            }
          />
          {step === 0 && (
            <PresenceTransition
              visible={step === 0}
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
                transition: {
                  duration: 250,
                },
              }}
            >
              <PlaceOrderStep1 formik={formik} />
            </PresenceTransition>
          )}
          {step === 1 && (
            <PresenceTransition
              visible={step === 1}
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
                transition: {
                  duration: 250,
                },
              }}
            >
              <PlaceOrderStep2 formik={formik} />
            </PresenceTransition>
          )}
          {step === 2 && (
            <PresenceTransition
              visible={step === 2}
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
                transition: {
                  duration: 250,
                },
              }}
            >
              <PlaceOrderStep3 formik={formik} />
            </PresenceTransition>
          )}

          {step === 2 ? (
            <View
              style={{
                backgroundColor: "#fff",
                height: screenHeight(0.3),
                margin: 0,
                borderTopEndRadius: 20,
                borderTopStartRadius: 20,
                marginTop: screenHeight(0.014),
                alignItems: "center",
                width: "100%",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <MainAppButton
                text="Edit Order"
                width={"48%"}
                height={screenWidth(0.14)}
                fontSize={screenWidth(0.04)}
                padding={screenWidth(0.0008)}
                backgroundColor={Colors.DEFAULT_WHITE}
                borderColor={Colors.LIGHT_BLUE}
                textColor={Colors.LIGHT_BLUE}
                onPress={() => {
                  setStep(1);
                }}
              />
              <MainAppButton
                text="Proceed"
                width={"48%"}
                height={screenWidth(0.14)}
                fontSize={screenWidth(0.04)}
                padding={screenWidth(0.0008)}
                backgroundColor={Colors.DARKER_BLUE}
                textColor={Colors.DEFAULT_WHITE}
                onPress={() => {
                  onOpen();
                }}
              />
            </View>
          ) : (
            <AppButton
              text="Continue"
              backgroundColor={Colors.DARKER_BLUE}
              textColor={Colors.DEFAULT_WHITE}
              borderColor={Colors.DARKER_BLUE}
              onPress={() => {
                setStep((prev) => prev + 1);
              }}
            />
          )}
          <Actionsheet isOpen={isOpen} onClose={onClose}>
            <Actionsheet.Content
              style={{
                alignItems: "flex-start",
              }}
            >
              <View
                style={{
                  paddingHorizontal: screenWidth(0.06),
                  paddingTop: screenHeight(0.06),
                  width: "100%",
                }}
              >
                <Text style={styles.headingMethod}>Select a payment mode</Text>
                <View
                  style={{
                    marginVertical: screenHeight(0.03),
                  }}
                >
                  <FormRadio
                    name="mode"
                    bottom={screenHeight(0.02)}
                    flexDirection={"column"}
                    options={[
                      {
                        label: "Online",
                        value: "1",
                      },
                      {
                        label: "Custom",
                        value: "2",
                      },
                      {
                        label: "Bank Account",
                        value: "3",
                      },
                    ]}
                  />
                </View>
                <AppButton
                  text="Proceed to make payment"
                  backgroundColor={Colors.DARKER_BLUE}
                  disabled
                  textColor={Colors.DEFAULT_WHITE}
                  onPress={() => {
                    navigation.navigate("AuthNavigator");
                  }}
                />
              </View>
            </Actionsheet.Content>
          </Actionsheet>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: Colors.DEFAULT_WHITE,
    flex: 1,
    color: "#000",
    paddingHorizontal: screenWidth(0.04),
    paddingBottom: screenHeight(0.03),
  },
  heading: {
    fontFamily: "regular500",
    fontSize: screenWidth(0.04),
  },
  headingMethod: {
    textAlign: "left",
    fontFamily: "regular500",
    fontSize: screenWidth(0.06),
  },
  door: {
    fontFamily: "regular500",
    color: Colors.DEFAULT_GREY,
    fontSize: screenWidth(0.04),
  },
  field: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    // backgroundColor: "blue",
  },
  circle: {
    alignSelf: "flex-start",
    backgroundColor: Colors.INVERT_BLUE,
    borderRadius: 9,
    padding: screenWidth(0.042),
  },
  circle2: {
    alignSelf: "flex-start",
    backgroundColor: Colors.LIGHT_BLUE2,
    borderRadius: 9,
    padding: screenWidth(0.042),
  },
});
