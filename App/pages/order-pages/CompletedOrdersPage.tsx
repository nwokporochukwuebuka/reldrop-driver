import { NavigationProp, useNavigation } from "@react-navigation/native";
import Logo from "App/assets/icons/Logo";
import AppButton from "App/components/bits/AppButton";
import OrderCard from "App/components/OrderCard";
import Colors from "App/config/Colors";
import { screenHeight, screenWidth } from "App/constants/Sizes";
import { MainStackParamList } from "App/types/navigation";
import { Image } from "expo-image";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ViewProps,
  ScrollView,
  FlatList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function CompletedOrdersPage(
  props: React.JSX.IntrinsicAttributes &
    React.JSX.IntrinsicClassAttributes<View> &
    Readonly<ViewProps>
) {
  const navigation = useNavigation<NavigationProp<MainStackParamList>>();

  const orders = [
    {
      status: "Completed",
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
      status: "Completed",
      date: "9th Mar",
      time: "16:22",
      address: "3a Sulaimon Shoderu Street",
      amount: "N2,800",
    },
  ];
  return (
    <View style={style.body}>
      <FlatList
        data={orders}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <OrderCard
            key={index}
            item={item}
            keyIndex={index}
            listLength={orders?.length}
          />
        )}
      />
    </View>
  );
}

const style = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: Colors.DEFAULT_WHITE,
    paddingHorizontal: screenWidth(0.04),
    paddingTop: screenHeight(0.02),
  },
});
