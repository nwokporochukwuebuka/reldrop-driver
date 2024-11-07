import { NavigationProp, useNavigation } from "@react-navigation/native";
import Logo from "App/assets/icons/Logo";
import AppButton from "App/components/bits/AppButton";
import Colors from "App/config/Colors";
import { screenHeight, screenSize, screenWidth } from "App/constants/Sizes";
import { MainStackParamList } from "App/types/navigation";
import { Image } from "expo-image";
import React from "react";
import { View, Text, StyleSheet, ViewProps, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";
import { Skeleton } from "native-base";

interface User {
  user?: any;
}
export default function UserTopBar({ user }: User) {
  const navigation = useNavigation<NavigationProp<MainStackParamList>>();
  return (
    <View style={style.top}>
      <View style={style.userProfileSide}>
        <View style={style.userProfile}></View>
        <View style={style.details}>
          {user?.first_name ? (
            <Text style={style.welcome}>Welcome</Text>
          ) : (
            <View>
              <Skeleton height={2} />
            </View>
          )}
          {user?.first_name ? (
            <Text style={style.name}>{user?.first_name}</Text>
          ) : (
            <View>
              <Skeleton height={2} marginY={3} />
            </View>
          )}
        </View>
      </View>
      <View style={style.top2}>
        <View style={style.bell}>
          <Ionicons
            onPress={() => {
              Haptics.selectionAsync();
              navigation.openDrawer();
            }}
            name="menu"
            size={26}
            color={Colors.LIGHT_BLUE}
          />
        </View>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  top: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: screenHeight(0.03),
  },
  top2: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: screenHeight(0.03),
    gap: screenHeight(0.014),
  },
  bell: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: Colors.INVERT_BLUE,
    borderRadius: 999,
    padding: screenWidth(0.026),
  },
  userProfileSide: {
    flexDirection: "row",
    alignItems: "center",
    gap: screenWidth(0.027),
  },
  userProfile: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: Colors.INVERT_BLUE,
    borderRadius: 999,
    ...screenSize(0.14, 0.064),
  },
  details: {},
  welcome: {
    fontSize: screenWidth(0.035),
    fontFamily: "regular400",
  },
  name: {
    fontSize: screenWidth(0.049),
  },
});
