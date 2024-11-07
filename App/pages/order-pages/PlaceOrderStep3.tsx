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
import {
  View,
  Text,
  StyleSheet,
  ViewProps,
  ScrollView,
  FlatList,
} from "react-native";
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

export default function PlaceOrderStep3({ formik, scrollRef }: Props) {
  const navigation = useNavigation<NavigationProp<MainStackParamList>>();

  const [service, setService] = useState("");

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
    <FlatList
      style={styles.body}
      data={data}
      renderItem={({ item, index }) => (
        <View key={index} style={styles.flex}>
          <Text style={styles.side1}>{item.title}</Text>
          <Text style={styles.side2}>{item.value}</Text>
        </View>
      )}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={() => (
        <View ref={scrollRef}>
          <Text style={styles.heading}>Your Order Summary</Text>

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
              <Text style={styles.address}>
                3a Sulaimon Shoderu Street, Aruna, Ikorodu
              </Text>
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
              <Text style={styles.address}>
                1, Awoniyi Elemo street, Ajao Estate, Oshodi-Isolo
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 8,
            }}
          >
            <VerifiedIcon />
            <Text style={styles.door}>Doorstep</Text>
          </View>
          <View style={styles.receiptBody}>
            <View style={styles.flexMain}>
              <View>
                <Text style={styles.deliveryTitle}>Delivery Amount:</Text>
                <Text style={styles.amount}>N5,000</Text>
              </View>
              <Text style={styles.side2}>Delivery in 25min</Text>
            </View>
          </View>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: Colors.DEFAULT_WHITE,
    height: "80%",
    color: "#000",
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
  deliveryTitle: {
    fontFamily: "regular500",
    color: Colors.DEFAULT_GREY,
    fontSize: screenWidth(0.038),
  },
  flexMain: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    paddingVertical: screenHeight(0.02),
    borderBottomWidth: 0.2,
    borderColor: Colors.OTHER_GREY,
    // marginBottom: screenHeight(0.02),
    // backgroundColor: "blue",
  },
  flex: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    paddingVertical: screenHeight(0.02),
    borderBottomWidth: 0.2,
    borderColor: Colors.OTHER_GREY,
    // marginBottom: screenHeight(0.02),
    // backgroundColor: "blue",
  },
  field: {
    flexDirection: "row",
    alignItems: "center",
    gap: screenWidth(0.032),
    // backgroundColor: "blue",
  },
  address: {
    fontFamily: "regular500",
    color: Colors.OTHER_GREY,
    fontSize: screenWidth(0.04),
    width: "60%",
    flexWrap: "wrap",
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
  receiptBody: {
    //backgroundColor: Colors.DEFAULT_WHITE,
    marginBottom: screenHeight(0),
    //backgroundColor: "#000",
  },

  amount: {
    fontFamily: "regular600",
    color: Colors.OTHER_GREY,
    fontSize: screenWidth(0.07),
  },

  side1: {
    fontFamily: "regular300",
    color: Colors.DEFAULT_GREY,
    fontSize: screenWidth(0.038),
  },
  side2: {
    fontFamily: "regular400",
    color: Colors.DEFAULT_GREY,
    fontSize: screenWidth(0.038),
    width: "50%",
    textAlign: "right",
  },
});
