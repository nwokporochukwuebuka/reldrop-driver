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
  FlatList,
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
import VerifiedBigIcon from "App/assets/icons/VerifiedBigIcon";

export default function TrackOrderPage(
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
  const { isOpen, onOpen, onClose } = useDisclose();

  console.log(useWindowDimensions().fontScale);
  const data = [
    {
      title: "Package Type",
      value: "Groceries",
    },
    {
      title: "Pick up schedule:",
      value: "Custom (3rd Jun, 2024 I 02:50pm)",
    },
    {
      title: "Sender",
      value: "Oladapo Koiki",
    },
    {
      title: "Sender’s Phone No.",
      value: "08029386768",
    },
    /*     {
      title: "Recipient",
      value: "Aminah Agbaje",
    },
    {
      title: "Reipient’s Phone No.",
      value: "08142528919",
    },
    {
      title: "Rider Instruction:",
      value:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    }, */
  ];
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
          <View
            style={{
              paddingHorizontal: screenWidth(0.04),
            }}
          >
            <PageBreadcrumb page="Ongoing Order" />
          </View>
          <Image
            style={{
              width: "100%",
              height: screenHeight(0.24),
              alignSelf: "center",
            }}
            source={require("App/assets/images/TrackOrderImg.png")}
          />
          <View style={styles.main}>
            <Text style={styles.time}>
              *Order will be delivered in approximately 25min (10:35am)
            </Text>

            <View style={styles.flexMain}>
              <View style={styles.flexInner}>
                <VerifiedBigIcon />
                <Text
                  style={{
                    fontFamily: "regular400",
                    fontSize: screenWidth(0.03),
                  }}
                >
                  Order Received By driver
                </Text>
              </View>
              <View style={styles.timebox}>
                <Text style={styles.timeboxtext}>10:00am</Text>
              </View>
            </View>
            <View
              style={{
                height: 22,
                width: 1,
                marginLeft: screenWidth(0.029),
                backgroundColor: "#999999",
              }}
            ></View>
            <View style={styles.flexMain}>
              <View style={styles.flexInner}>
                <VerifiedBigIcon />
                <Text
                  style={{
                    fontFamily: "regular400",
                    fontSize: screenWidth(0.03),
                  }}
                >
                  Order Received By driver
                </Text>
              </View>
              <View style={styles.timebox}>
                <Text style={styles.timeboxtext}>10:00am</Text>
              </View>
            </View>
            <View
              style={{
                height: 22,
                width: 1,
                marginLeft: screenWidth(0.029),
                backgroundColor: "#999999",
              }}
            ></View>
            <View style={styles.flexMain}>
              <View style={styles.flexInner}>
                <VerifiedBigIcon />
                <Text
                  style={{
                    fontFamily: "regular400",
                    fontSize: screenWidth(0.03),
                  }}
                >
                  Order Received By driver
                </Text>
              </View>
              <View style={styles.timebox}>
                <Text style={styles.timeboxtext}>10:00am</Text>
              </View>
            </View>
            <View
              style={{
                height: 22,
                width: 1,
                marginLeft: screenWidth(0.029),
                backgroundColor: "#999999",
              }}
            ></View>
            <View style={styles.flexMain}>
              <View style={styles.flexInner}>
                <VerifiedBigIcon />
                <Text
                  style={{
                    fontFamily: "regular400",
                    fontSize: screenWidth(0.03),
                  }}
                >
                  Order Received By driver
                </Text>
              </View>
              <View style={styles.timebox}>
                <Text style={styles.timeboxtext}>10:00am</Text>
              </View>
            </View>
            <View
              style={{
                width: "100%",
                height: 0.3,
                marginVertical: screenHeight(0.024),
                backgroundColor: "#999999",
              }}
            ></View>
            <Text style={styles.info}>
              Give this code to the delivery man upon arrival
            </Text>

            <View style={styles.flexInner}>
              <View style={styles.code}>
                <Text style={styles.codeInt}>1</Text>
              </View>
              <View style={styles.code}>
                <Text style={styles.codeInt}>2</Text>
              </View>
              <View style={styles.code}>
                <Text style={styles.codeInt}>3</Text>
              </View>
              <View style={styles.code}>
                <Text style={styles.codeInt}>4</Text>
              </View>
            </View>
          </View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: Colors.DEFAULT_WHITE,
    flex: 1,
  },
  main: {
    padding: screenWidth(0.06),
  },
  time: {
    fontSize: screenWidth(0.038),
    width: "80%",
    fontFamily: "regular400",
    marginBottom: screenHeight(0.028),
  },
  flexMain: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    // marginBottom: screenHeight(0.02),
    // backgroundColor: "blue",
  },
  flexInner: {
    flexDirection: "row",
    alignItems: "center",
    gap: screenWidth(0.02),
    // marginBottom: screenHeight(0.02),
    // backgroundColor: "blue",
  },
  timebox: {
    padding: screenWidth(0.02),
    borderRadius: 999,
    backgroundColor: "#FAFAFA",
  },
  timeboxtext: {
    fontFamily: "regular400",
    fontSize: screenWidth(0.03),
  },
  code: {
    width: screenWidth(0.13),
    height: screenWidth(0.13),
    borderRadius: 9,
    backgroundColor: Colors.LIGHT_BLUE2,
    alignItems: "center",
    justifyContent: "center",
  },
  codeInt: {
    fontFamily: "regular400",
    fontSize: screenWidth(0.08),
  },
  info: {
    fontSize: screenWidth(0.034),
    width: "100%",
    fontFamily: "regular400",
    marginBottom: screenHeight(0.028),
  },
});
