import { NavigationProp, useNavigation } from "@react-navigation/native";
import Logo from "App/assets/icons/Logo";
import AppButton from "App/components/bits/AppButton";
import Colors from "App/config/Colors";
import { screenHeight, screenSize, screenWidth } from "App/constants/Sizes";
import { MainStackParamList } from "App/types/navigation";
import { Image } from "expo-image";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ViewProps,
  ScrollView,
  TouchableOpacity,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import UserTopBar from "App/components/dashboard/UserTopBar";
import Swiper from "react-native-swiper";
import LiveIcon from "App/assets/icons/LiveIcon";
import UpdateRightIcon from "App/assets/icons/UpdateRightIcon";
import { FlatList } from "react-native-gesture-handler";
import OrderCard from "App/components/OrderCard";
import { getValueFor, removeValueFor, save } from "App/hooks/SecureStore";
import { useAuth } from "App/context/global.context";
import { useMutation } from "@tanstack/react-query";
import { ApiServiceAuth } from "App/service/auth-services";
import Loader from "App/components/Loader";
import WifiIcon from "App/assets/icons/WifiIcon";
import BikeIcon from "App/assets/icons/BikeIcon";
import DebitIcon from "App/assets/icons/DebitIcon";
import CreditIcon from "App/assets/icons/CreditIcon";
import BackBtn from "App/assets/icons/BackBtn";
import FormSelect from "App/components/bits/FormSelect";
import DropDownIcon from "App/assets/icons/DropDownIcon";
//import Loader from "App/components/Loader";

interface ItemM {
  item?: any;
  keyIndex?: any;
}

const Slip = ({ item, keyIndex }: ItemM) => {
  return (
    <View
      style={{
        marginBottom: screenHeight(0.02),
        paddingBottom: screenHeight(0.02),
        borderBottomWidth: 0.2,
        borderBottomColor: "#6d7d8b61",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
      key={keyIndex}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          width: "30%",
        }}
      >
        {item?.status === "Credit" ? <CreditIcon /> : <DebitIcon />}
        <Text
          style={{
            fontFamily: "regular400",
            marginLeft: "6%",
          }}
        >
          {item?.status}
        </Text>
      </View>
      <Text
        style={{
          fontFamily: "regular400",
        }}
      >
        {item?.date}
      </Text>
      <Text
        style={{
          fontFamily: "regular400",
        }}
      >
        {item?.amount}
      </Text>
    </View>
  );
};

export default function EarningsPage(
  props: React.JSX.IntrinsicAttributes &
    React.JSX.IntrinsicClassAttributes<View> &
    Readonly<ViewProps>
) {
  const navigation = useNavigation<NavigationProp<MainStackParamList>>();

  const orders = [
    {
      status: "Credit",
      date: "02-1-2023",
      amount: "N28,800",
    },
    {
      status: "Withdraw",
      date: "02-1-2023",
      amount: "N28,800",
    },
    {
      status: "Credit",
      date: "02-1-2023",
      amount: "N28,800",
    },

    {
      status: "Credit",
      date: "02-1-2023",
      amount: "N28,800",
    },
    {
      status: "Withdraw",
      date: "02-1-2023",
      amount: "N28,800",
    },
  ];

  const { isAuth, fetchUser } = useAuth();

  const [user, setUser] = useState<any>({ first_name: "", last_name: "" });

  const { mutate, isPending } = useMutation({
    mutationFn: ApiServiceAuth.GetUserMutation,
    onSuccess: (data) => {
      console.log(data, "dash");
      if (data) {
        setUser(data);
        save("user_data", JSON.stringify(data));
        fetchUser();
      } else {
        setUser({ first_name: "", last_name: "" });
      }
    },
    onError: (error) => {
      return;
    },
  });
  useEffect(() => {
    if (isAuth) {
      mutate({ token: isAuth });
    }
  }, [isAuth]);
  return (
    <SafeAreaView edges={["top", "left", "right"]} style={styles.body}>
      {isPending && <Loader />}
      <FlatList
        data={orders}
        renderItem={({ item, index }) => (
          <Slip key={index} item={item} keyIndex={index} />
        )}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => (
          <View>
            <View style={styles.top}>
              <View style={styles.topInner}>
                <BackBtn />
                <Text
                  style={{
                    fontSize: screenWidth(0.045),
                    color: Colors.MAIN_BLACK,
                    fontFamily: "regular500",
                  }}
                >
                  {"  "}
                  My Earnings
                </Text>
              </View>
              <FormSelect
                defaultValue="May"
                name="namme"
                icon={<DropDownIcon height="6" width="6" />}
                width="30%"
                padding={Platform.OS === "ios" ? "13%" : "3%"}
              />
            </View>

            <View style={styles.wallet}>
              <Text style={styles.walletTitle}>Your Earnings this week</Text>
              <Text style={styles.walletAmount}>#180,000</Text>
            </View>
            <View style={styles.walletB}></View>

            <View style={styles.orderListTop}>
              <Text
                style={{
                  fontFamily: "regular300",
                  fontSize: screenWidth(0.045),
                  color: Colors.DARK_GREY,
                }}
              >
                Starts
              </Text>
              <Text
                onPress={() => {
                  navigation.navigate("Orders");
                }}
                style={{
                  fontFamily: "regular300",
                  fontSize: screenWidth(0.03),
                  textDecorationLine: "underline",
                }}
              >
                See breakdown
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: screenHeight(0.02),
              }}
            >
              <TouchableOpacity
                style={[
                  styles.live,
                  {
                    backgroundColor: Colors.LIGHT_BLUE2,
                    width: "58%",
                  },
                ]}
              >
                <View style={styles.liveText}>
                  <WifiIcon />
                  <View>
                    <Text
                      style={{
                        fontFamily: "regular300",
                        color: "#767676",
                      }}
                    >
                      Online
                    </Text>
                    <Text
                      style={{
                        fontFamily: "regular500",
                        fontSize: screenWidth(0.046),
                        color: Colors.DARK_GREY,
                      }}
                    >
                      41hrs 18mins
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.live,
                  { backgroundColor: "#F4F4F4", width: "40%" },
                ]}
              >
                <View style={styles.liveText}>
                  <BikeIcon />
                  <View>
                    <Text
                      style={{
                        fontFamily: "regular300",
                        color: "#767676",
                      }}
                    >
                      Deliveries
                    </Text>
                    <Text
                      style={{
                        fontFamily: "regular500",
                        fontSize: screenWidth(0.046),
                        color: Colors.DARK_GREY,
                      }}
                    >
                      69
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.orderListTop}>
              <Text
                style={{
                  fontFamily: "regular300",
                  fontSize: screenWidth(0.045),
                  color: Colors.DARK_GREY,
                }}
              >
                Recent Transactions
              </Text>
              <Text
                onPress={() => {
                  navigation.navigate("Orders");
                }}
                style={{
                  fontFamily: "regular300",
                  fontSize: screenWidth(0.03),
                  textDecorationLine: "underline",
                }}
              >
                View all
              </Text>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: Colors.DEFAULT_WHITE,
    flex: 1,
    paddingHorizontal: screenWidth(0.04),
    // paddingBottom: screenHeight(0.04),
  },
  top: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: screenHeight(0.02),
    justifyContent: "space-between",
    //backgroundColor: Colors.DEFAULT_GREEN,
  },
  topInner: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: screenHeight(0.02),
    //backgroundColor: Colors.DEFAULT_GREEN,
  },
  orderListTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: screenHeight(0.015),
  },
  bell: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: Colors.INVERT_BLUE,
    borderRadius: 999,
    padding: screenWidth(0.026),
  },
  userProfile: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: Colors.INVERT_BLUE,
    borderRadius: 999,
    ...screenSize(0.14, 0.064),
  },

  wrapper: {
    backgroundColor: "#fff",
    alignSelf: "flex-start",
    height: screenHeight(0.14),
  },

  slide: {
    backgroundColor: Colors.DEFAULT_WHITE,
    paddingHorizontal: screenWidth(0.01),
    width: "100%",
    alignSelf: "center",
  },
  slideInner: {
    backgroundColor: Colors.DARKER_BLUE,
    padding: screenWidth(0.059),
    height: screenHeight(0.14),
    borderRadius: 9,
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
  live: {
    paddingHorizontal: screenWidth(0.04),
    paddingVertical: screenHeight(0.018),
    borderRadius: 9,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: screenWidth(0.044),
  },
  liveText: {
    flexDirection: "row",
    alignItems: "center",
    gap: screenWidth(0.044),
  },
  liveIcon: {
    backgroundColor: Colors.INVERT_BLUE,
    borderRadius: 999,
    paddingHorizontal: screenWidth(0.026),
    paddingVertical: screenWidth(0.032),
  },
  wallet: {
    backgroundColor: Colors.DARKER_BLUE,
    padding: screenWidth(0.062),
    borderRadius: 11,
  },
  walletB: {
    backgroundColor: Colors.DARKER_BLUE,
    height: screenHeight(0.01),
    width: "95%",
    alignSelf: "center",
    opacity: 0.7,
    marginBottom: screenHeight(0.03),
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  walletTitle: {
    color: "#fff",
    marginBottom: screenHeight(0.003),
    fontFamily: "regular500",
  },
  walletAmount: {
    color: "#fff",
    fontFamily: "regular600",
    fontSize: screenWidth(0.092),
  },
});
