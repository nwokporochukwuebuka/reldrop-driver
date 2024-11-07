import BikeIcon from "App/assets/icons/BikeIcon";
import Colors from "App/config/Colors";
import { screenHeight, screenWidth } from "App/constants/Sizes";
import React from "react";
import { View, Text, StyleSheet, ViewProps, Platform } from "react-native";
import MainAppButton from "./bits/MainAppButton";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { OrdersStackParamList } from "App/types/navigation";

interface ItemProps {
  item?: {
    status?: string;
    date?: string;
    time?: string;
    address?: string;
    amount?: string;
  };
  keyIndex?: any;
  listLength?: number;
}

export default function OrderCard({
  item = {
    status: "Cancelled",
    date: "9th Mar",
    time: "16:22",
    address: "3a Sulaimon Shoderu Street",
    amount: "N2,800",
  },
  keyIndex,
  listLength,
}: ItemProps) {
  const actualKey = keyIndex + 1;

  const navigation = useNavigation<NavigationProp<OrdersStackParamList>>();
  return (
    <View
      key={keyIndex}
      style={[
        styles.body,
        {
          marginBottom:
            actualKey === listLength ? screenHeight(0.06) : screenHeight(0.02),
          borderBottomWidth: 0.3,
          borderColor: Colors.OTHER_GREY,
          paddingBottom: screenHeight(0.02),
        },
      ]}
    >
      <View style={styles.slide}>
        <View style={styles.slide2}>
          <View style={styles.liveIcon}>
            <BikeIcon />
          </View>
          <View>
            <Text style={styles.address}>{item?.address}....</Text>
            <Text style={styles.date}>
              {item?.date} | {item?.time}
            </Text>
            <Text
              style={[
                styles.status,
                {
                  color:
                    item?.status === "Cancelled"
                      ? Colors.ORDER_CANCELLED_DARK
                      : item?.status === "Completed"
                      ? Colors.ORDER_COMPLETED_DARK
                      : Colors.ORDER_PROGRESS_DARK,
                },
              ]}
            >
              {item?.status}
            </Text>
          </View>
        </View>
        <View>
          <Text style={styles.amount}>{item?.amount}</Text>
          <View style={styles.slideBtns}>
            {item?.status === "In progress..." && (
              <MainAppButton
                text="Track"
                width={
                  Platform.OS === "android"
                    ? screenWidth(0.2)
                    : screenWidth(0.16)
                }
                height={screenWidth(0.07)}
                fontSize={screenWidth(0.03)}
                borderRadius={6}
                padding={screenWidth(0.0004)}
                backgroundColor={Colors.MAIN_BLACK}
                borderColor={Colors.MAIN_BLACK}
                textColor={Colors.DEFAULT_WHITE}
                onPress={() => {
                  navigation.navigate("TrackOrderPage");
                }}
              />
            )}
            {item?.status === "Cancelled" && (
              <MainAppButton
                text="Rebook"
                width={
                  Platform.OS === "android"
                    ? screenWidth(0.24)
                    : screenWidth(0.18)
                }
                height={screenWidth(0.07)}
                fontSize={screenWidth(0.03)}
                borderRadius={6}
                padding={screenWidth(0.0004)}
                backgroundColor={Colors.LIGHT_BLUE}
                borderColor={Colors.LIGHT_BLUE}
                textColor={Colors.DEFAULT_WHITE}
              />
            )}
            {item?.status === "Completed" && (
              <MainAppButton
                text="Rebook"
                width={
                  Platform.OS === "android"
                    ? screenWidth(0.24)
                    : screenWidth(0.18)
                }
                height={screenWidth(0.07)}
                fontSize={screenWidth(0.03)}
                borderRadius={6}
                padding={screenWidth(0.0004)}
                backgroundColor={Colors.LIGHT_BLUE}
                borderColor={Colors.LIGHT_BLUE}
                textColor={Colors.DEFAULT_WHITE}
              />
            )}
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    paddingVertical: screenHeight(0.012),
    paddingHorizontal: screenWidth(0.04),
    borderRadius: 9,
  },
  date: {
    color: Colors.DEFAULT_GREY,
    fontSize: screenWidth(0.03),
    fontFamily: "regular400",
    marginTop: screenHeight(0.013),
    marginBottom: screenHeight(0.013),
  },
  amount: {
    color: Colors.DARK_GREY,
    fontSize: screenWidth(0.04),
    fontFamily: "regular500",
    textAlign: "right",
    marginBottom: screenHeight(0.01),
  },
  status: {
    fontSize: screenWidth(0.025),
  },
  address: {
    fontSize: screenWidth(0.033),
    fontFamily: "regular600",
    color: Colors.DEFAULT_GREY,
  },
  slide: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: screenWidth(0.03),
  },
  slide2: {
    flexDirection: "row",
    alignItems: "center",
    gap: screenWidth(0.03),
  },
  slideBtns: {
    flexDirection: "row",
    marginTop: screenHeight(0.002),
    alignItems: "center",
    gap: screenWidth(0.022),
  },
  liveIcon: {
    backgroundColor: "#F4F4F4",
    alignSelf: "flex-start",
    borderRadius: 999,
    paddingHorizontal: screenWidth(0.001),
    paddingVertical: screenWidth(0.001),
  },
});
