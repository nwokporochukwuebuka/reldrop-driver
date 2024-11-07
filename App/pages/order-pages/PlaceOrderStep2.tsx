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
import React, { useState } from "react";
import { View, Text, StyleSheet, ViewProps, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Box, Center, CheckIcon, Select } from "native-base";
import FormSelect from "App/components/bits/FormSelect";
import LocationIcon from "App/assets/icons/LocationIcon";
import BlackBox from "App/assets/icons/BlackBox";
import FormRadio from "App/components/bits/FormRadio";
import VerifiedIcon from "App/assets/icons/VerifiedIcon";
import FormFileInput from "App/components/bits/FormFileInput";
import { Line } from "react-native-svg";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import FormInputTextArea from "App/components/bits/FormInputTextArea";

interface Props {
  formik?: any;
  scrollRef?: any;
}

export default function PlaceOrderStep2({ formik, scrollRef }: Props) {
  const navigation = useNavigation<NavigationProp<MainStackParamList>>();

  const [service, setService] = useState("");
  return (
    <ScrollView ref={scrollRef} showsVerticalScrollIndicator={false}>
      <FormInput
        label="Sender Name"
        placeholder="Sender Name"
        name="email"
        formik={formik}
      />
      <FormInput
        label="Phone Number"
        placeholder="Phone Number"
        name="email"
        formik={formik}
      />
      <FormInput
        label="Recipient Name"
        placeholder="Recipient Name"
        name="email"
        formik={formik}
      />
      <FormInput
        label="Recipient Phone Number"
        placeholder="Recipient Phone Number"
        name="email"
        formik={formik}
      />
      <FormInputTextArea
        label="Rider Instruction"
        placeholder="Rider Instruction"
        name="email"
        formik={formik}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: Colors.DEFAULT_WHITE,
    flex: 1,
    color: "#000",
    paddingHorizontal: screenWidth(0.04),
  },
  heading: {
    fontFamily: "regular500",
    fontSize: screenWidth(0.04),
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
