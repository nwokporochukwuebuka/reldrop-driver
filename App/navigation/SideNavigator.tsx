import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { SafeAreaView, Text, View } from "react-native";
import { DrawerStackParamList } from "App/types/navigation";
import Colors from "App/config/Colors";
import { MainNavigator } from "./MainNavigator";
import CustomDrawer from "App/components/CustomDrawer";

const Drawer = createDrawerNavigator<DrawerStackParamList>();

const SideNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: "transparent",
        drawerLabel: "",
        drawerLabelStyle: {
          height: 0,
          margin: 0,
        },
        drawerStyle: {
          width: 290,
          backgroundColor: Colors.DEFAULT_WHITE,
        },
      }}
      drawerContent={(props) => {
        return <CustomDrawer />;
      }}
    >
      <Drawer.Screen name="Tabs" component={MainNavigator} />
    </Drawer.Navigator>
  );
};

export default SideNavigator;
