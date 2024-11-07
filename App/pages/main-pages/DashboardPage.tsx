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
//import Loader from "App/components/Loader";

export default function DashboardPage(
  props: React.JSX.IntrinsicAttributes &
    React.JSX.IntrinsicClassAttributes<View> &
    Readonly<ViewProps>
) {
  const navigation = useNavigation<NavigationProp<MainStackParamList>>();

  const orders = [
    {
      status: "Cancelled",
      date: "9th Mar",
      time: "16:22",
      address: "3a Sulaimon Shoderu Street",
      amount: "N2,800",
    },
    {
      status: "Completed",
      date: "9th Mar",
      time: "16:22",
      address: "3a Sulaimon Shoderu Street",
      amount: "N2,800",
    },
    {
      status: "In progress...",
      date: "9th Mar",
      time: "16:22",
      address: "3a Sulaimon Shoderu Street",
      amount: "N2,800",
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
          <OrderCard
            key={index}
            item={item}
            keyIndex={index}
            listLength={orders?.length}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={() => {
          return (
            <FlatList
              data={orders}
              renderItem={({ item, index }) => (
                <OrderCard
                  key={index}
                  item={item}
                  keyIndex={index}
                  listLength={orders?.length}
                />
              )}
              showsVerticalScrollIndicator={false}
              ListFooterComponent={() => {
                return (
                  <Swiper
                    style={styles.wrapper}
                    showsButtons={false}
                    showsPagination={false}
                  >
                    <View style={styles.slide}>
                      <Image
                        style={{
                          width: "94%",
                          height: screenHeight(0.14),
                          alignSelf: "center",
                          borderRadius: 10,
                        }}
                        source={require("App/assets/images/DashHeroImg.png")}
                      />
                    </View>
                    <View style={styles.slide}>
                      <Image
                        style={{
                          width: "94%",
                          height: screenHeight(0.14),
                          alignSelf: "center",
                          borderRadius: 10,
                        }}
                        source={require("App/assets/images/DashHeroImg.png")}
                      />
                    </View>
                    <View style={styles.slide}>
                      <Image
                        style={{
                          width: "94%",
                          height: screenHeight(0.14),
                          alignSelf: "center",
                          borderRadius: 10,
                        }}
                        source={require("App/assets/images/DashHeroImg.png")}
                      />
                    </View>
                  </Swiper>
                );
              }}
              ListHeaderComponent={() => (
                <View>
                  <View style={styles.orderListTop}>
                    <Text
                      style={{
                        fontFamily: "regular300",
                        fontSize: screenWidth(0.045),
                        color: Colors.DARK_GREY,
                      }}
                    >
                      Scheduled Deliveries
                    </Text>
                    <Text
                      onPress={() => {
                        navigation.navigate("Orders");
                      }}
                      style={{
                        fontFamily: "regular500",
                        fontSize: screenWidth(0.04),
                        textDecorationLine: "underline",
                      }}
                    >
                      View all
                    </Text>
                  </View>
                </View>
              )}
            />
          );
        }}
        ListHeaderComponent={() => (
          <View>
            <UserTopBar user={user} />

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
                Ongoing Pickups
              </Text>
              <Text
                onPress={() => {
                  navigation.navigate("Orders");
                }}
                style={{
                  fontFamily: "regular500",
                  fontSize: screenWidth(0.04),
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
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: screenHeight(0.03),
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
    backgroundColor: Colors.LIGHT_BLUE,
    paddingHorizontal: screenWidth(0.04),
    width: screenWidth(0.92),
    marginVertical: screenHeight(0.03),
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
