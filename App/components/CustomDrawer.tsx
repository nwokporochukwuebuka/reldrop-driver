import {
  FlatList,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { ReactNode, useEffect, useState } from "react";
import { FontAwesome, Ionicons } from "@expo/vector-icons";

import {
  DrawerActions,
  NavigationProp,
  useNavigation,
} from "@react-navigation/native";
import Colors from "App/config/Colors";
import BackBtn from "App/assets/icons/BackBtn";
import { screenHeight, screenSize, screenWidth } from "App/constants/Sizes";
import { MainStackParamList } from "App/types/navigation";
import MainAppButton from "./bits/MainAppButton";
import GestureRecognizer from "react-native-swipe-gestures";
import * as Haptics from "expo-haptics";
import { Actionsheet, useDisclose } from "native-base";
import { useMutation } from "@tanstack/react-query";
import { ApiServiceAuth } from "App/service/auth-services";
import Loader from "./Loader";
import { clearSpecificKey } from "App";
import { removeValueFor } from "App/hooks/SecureStore";
import { useAuth } from "App/context/global.context";

interface UserDrawer {
  user?: any;
}

export function UserCard({ user }: UserDrawer) {
  const navigation = useNavigation<NavigationProp<MainStackParamList>>();

  /*  const handleNavigation = (name: string) => {
    navigation.dispatch(DrawerActions.closeDrawer());
    navigation.navigate(name);
  }; */

  return (
    <View>
      <BackBtn
        onPress={() => navigation.dispatch(DrawerActions.closeDrawer())}
      />
      <View style={styles.userProfileSide}>
        <View style={styles.userProfile}></View>
        <View>
          <Text style={styles.welcome}>{user?.first_name}</Text>
          <Text style={styles.name}>{user?.last_name}</Text>
        </View>
      </View>
    </View>
  );
}

interface NavItemss {
  item?: {
    name: string;
    icon: ReactNode | Element;
    route?: string | undefined;
    id: number;
    action?: () => void | undefined;
  };
}

function NavItems({ item }: NavItemss) {
  const navigation = useNavigation<NavigationProp<MainStackParamList>>();

  const handleNavigation = (name: string | undefined) => {
    navigation.dispatch(DrawerActions.closeDrawer());
    navigation.navigate(name);
  };

  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          Haptics.selectionAsync();
          if (item?.route) {
            handleNavigation(item?.route);
          } else {
            navigation.dispatch(DrawerActions.closeDrawer());
            if (item?.action) item.action();
          }
        }}
        style={styles.navItem}
      >
        <View style={styles.navItemCircle}>{item?.icon}</View>
        <Text style={styles.navItemText}>{item?.name}</Text>
      </TouchableOpacity>
    </View>
  );
}

const CustomDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclose();
  const drawerItems = [
    {
      id: 1,
      name: "My Profile",
      icon: (
        <Ionicons name="person-outline" size={22} color={Colors.LIGHT_BLUE} />
      ),
      route: "MyProfilePage",
    },
    {
      id: 4,
      name: "Settings",
      icon: (
        <Ionicons name="settings-outline" size={22} color={Colors.LIGHT_BLUE} />
      ),
      route: "SettingsPage",
    },
    {
      id: 5,
      name: "Support",
      icon: (
        <Ionicons name="headset-outline" size={22} color={Colors.LIGHT_BLUE} />
      ),
      route: "SupportPage",
    },
    {
      id: 6,
      name: "Logout",
      icon: (
        <Ionicons name="log-out-outline" size={22} color={Colors.LIGHT_BLUE} />
      ),
      action: () => {
        onOpen();
        //setModal(true);
      },
    },
  ];
  const navigation = useNavigation<NavigationProp<MainStackParamList>>();
  const { isAuth, userData, logout } = useAuth();

  const { mutate, isPending, error } = useMutation({
    mutationFn: ApiServiceAuth.LogoutMutation,
    onSuccess: (data) => {
      setTimeout(() => {
        navigation.navigate("AuthNavigator");
      }, 3000);
      console.log(data);
      logout();
    },
    onError: (error) => {
      // removeValueFor("token");
      console.log(error?.response?.data, "errorerror");
      return;
    },
  });

  return (
    <View style={styles.top}>
      <UserCard user={userData} />
      {isPending ? <Loader /> : <Text></Text>}
      <FlatList
        data={drawerItems}
        renderItem={({ item, index }) => <NavItems key={index} item={item} />}
      />

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
            <View
              style={{
                marginBottom: screenHeight(0.06),
              }}
            >
              <Text
                style={{
                  fontSize: screenWidth(0.06),
                  textAlign: "center",
                  fontFamily: "regular500",
                }}
              >
                Are you sure you
              </Text>
              <Text
                style={{
                  fontSize: screenWidth(0.06),
                  textAlign: "center",
                  fontFamily: "regular500",
                }}
              >
                want to log out?
              </Text>
            </View>
            <View
              style={{
                backgroundColor: "#fff",
                margin: 0,
                borderTopEndRadius: 20,
                borderTopStartRadius: 20,
                alignItems: "center",
                width: "100%",
                flexDirection: "row",
                marginBottom: screenHeight(0.02),
                justifyContent: "space-between",
              }}
            >
              <MainAppButton
                text="Log out"
                width={"48%"}
                height={screenWidth(0.14)}
                fontSize={screenWidth(0.05)}
                padding={screenWidth(0.0008)}
                backgroundColor={Colors.DARKER_BLUE}
                textColor={Colors.DEFAULT_WHITE}
                onPress={() => {
                  mutate({ token: isAuth });
                  //clearSpecificKey("token");
                }}
              />
              <MainAppButton
                text="Cancel"
                width={"48%"}
                height={screenWidth(0.14)}
                fontSize={screenWidth(0.05)}
                padding={screenWidth(0.0008)}
                backgroundColor={Colors.ORDER_CANCELLED}
                borderColor={Colors.ORDER_CANCELLED}
                textColor={Colors.ORDER_CANCELLED_DARK}
                onPress={() => {
                  onClose();
                }}
              />
            </View>
          </View>
        </Actionsheet.Content>
      </Actionsheet>
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  top: {
    paddingHorizontal: screenHeight(0.03),
    marginVertical: screenHeight(0.06),
  },

  top2: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: screenHeight(0.03),
    gap: screenHeight(0.014),
  },

  userProfileSide: {
    flexDirection: "row",
    alignItems: "center",
    gap: screenWidth(0.027),
    marginVertical: screenHeight(0.03),
    marginBottom: screenHeight(0.07),
  },
  userProfile: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: Colors.INVERT_BLUE,
    borderRadius: 999,
    ...screenSize(0.2, 0.09),
  },
  welcome: {
    fontSize: screenWidth(0.055),
  },
  name: {
    fontSize: screenWidth(0.055),
  },

  navItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: screenWidth(0.032),
    marginBottom: screenHeight(0.044),
  },
  navItemCircle: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: Colors.INVERT_BLUE,
    borderRadius: 999,
    padding: screenWidth(0.022),
  },
  navItemText: {
    fontSize: screenWidth(0.049),
    fontFamily: "regular400",
  },
});
