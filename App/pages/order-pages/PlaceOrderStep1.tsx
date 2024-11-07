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

interface Props {
  formik?: any;
  scrollRef?: any;
}

export default function PlaceOrderStep1({ formik, scrollRef }: Props) {
  const navigation = useNavigation<NavigationProp<MainStackParamList>>();

  const [service, setService] = useState("");
  return (
    <ScrollView ref={scrollRef} showsVerticalScrollIndicator={false}>
      <Text style={styles.heading}>Enter pick up and drop off location</Text>
      {/*    <GooglePlacesAutocomplete
          placeholder="Search"
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(data, details);
          }}
          query={{
            key: "AIzaSyCMyDv21_QCtOAIfcNcD32XcLB5HHu6_fg",
            language: "en",
          }}
          requestUrl={{
            url: "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api",
            useOnPlatform: "all",
          }}
        /> */}
      <View
        style={{
          marginTop: screenHeight(0.02),
          marginBottom: screenHeight(0.03),
        }}
      >
        <View style={styles.field}>
          <View style={styles.circle}>
            <LocationIcon />
          </View>
          <FormInput
            placeholder="Pick Up"
            name="email"
            width="81%"
            formik={formik}
            bottom={0}
          />
        </View>
        <View
          style={{
            height: 22,
            width: 2,
            marginLeft: screenHeight(0.033),
            marginVertical: screenHeight(0.008),
            backgroundColor: "#09A5DB",
          }}
        ></View>
        <View style={styles.field}>
          <View style={styles.circle2}>
            <BlackBox />
          </View>
          <FormInput
            placeholder="Drop Off"
            name="email"
            width="81%"
            formik={formik}
            bottom="0"
          />
        </View>
      </View>
      <FormSelect
        label="Package Type"
        placeholder="Package Type"
        name="email"
        formik={formik}
        bottom={screenHeight(0.02)}
        options={[
          {
            label: "Web Development",
            value: "web",
          },
          {
            label: "Cross Platform Development",
            value: "cross",
          },
          {
            label: "UI Designing",
            value: "ui",
          },
          {
            label: "Backend Development",
            value: "backend",
          },
        ]}
      />
      <FormRadio
        name="schedule"
        label="Pick up schedule"
        bottom={screenHeight(0.02)}
        options={[
          {
            label: "Instantly",
            value: "1",
          },
          {
            label: "Custom",
            value: "2",
          },
        ]}
      />

      <FormFileInput
        name="file"
        label="Upload image"
        bottom={screenHeight(0.02)}
        options={[
          {
            label: "Instantly",
            value: "1",
          },
          {
            label: "Custom",
            value: "2",
          },
        ]}
      />

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginBottom: screenHeight(0.04),
          gap: 8,
        }}
      >
        <VerifiedIcon />
        <Text style={styles.door}>Doorstep Delivery</Text>
      </View>
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
