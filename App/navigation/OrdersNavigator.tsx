import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import PageBreadcrumb from "App/components/PageBreadcrumb";
import Colors from "App/config/Colors";
import { screenHeight, screenWidth } from "App/constants/Sizes";
import CancelledOrdersPage from "App/pages/order-pages/CancelledOrdersPage";
import CompletedOrdersPage from "App/pages/order-pages/CompletedOrdersPage";
import OngoingOrdersPage from "App/pages/order-pages/OngoingOrdersPage";
import OrdersPage from "App/pages/order-pages/OrdersPage";
import ScheduledOrdersPage from "App/pages/order-pages/ScheduledOrdersPage";
import { OrdersStackParamList } from "App/types/navigation";
import { Platform, SafeAreaView, Text, View } from "react-native";

const Tab = createMaterialTopTabNavigator<OrdersStackParamList>();

export function OrdersNavigator() {
  const getTabWidth = (label: any) => {
    // Basic calculation, assuming average character width is ~8-10 pixels
    return Math.max(90, label.length * 10); // Minimum width of 80px, adjust as needed
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: Colors.DEFAULT_WHITE,
        paddingTop: Platform.OS === "android" && screenHeight(0.04),
      }}
    >
      <View
        style={{
          paddingHorizontal: screenWidth(0.04),
        }}
      >
        <PageBreadcrumb page="Deliveries" />
      </View>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarScrollEnabled: true,
          tabBarItemStyle: {
            width: getTabWidth(route.name), // Dynamic width based on label length
          },
          tabBarStyle: {
            backgroundColor: "#fff",
            height: screenHeight(0.06),
            borderWidth: 0,
          },
          tabBarIndicatorStyle: { backgroundColor: Colors.LIGHT_BLUE },
          tabBarLabelStyle: {
            fontSize:
              Platform.OS === "android"
                ? screenWidth(0.03)
                : screenWidth(0.033),
            color: Colors.LIGHT_BLUE,
            fontFamily: "regular500",
            textTransform: "capitalize",
          }, // Label font size
        })}
      >
        <Tab.Screen name="All" component={OrdersPage} />
        <Tab.Screen name="Ongoing" component={OngoingOrdersPage} />
        <Tab.Screen name="Scheduled" component={ScheduledOrdersPage} />
        <Tab.Screen name="Cancelled" component={CancelledOrdersPage} />
        <Tab.Screen name="Completed" component={CompletedOrdersPage} />
      </Tab.Navigator>
    </SafeAreaView>
  );
}
