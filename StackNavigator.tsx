import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SuccessFulPage from "App/components/SuccessfulPage";
import MainContext, { useAuth } from "App/context/global.context";
import { getValueFor } from "App/hooks/SecureStore";
import { AuthNavigator } from "App/navigation/AuthNavigator";
import SideNavigator from "App/navigation/SideNavigator";
import MyProfilePage from "App/pages/main-pages/MyProfilePage";
import PlaceOrdersPage from "App/pages/main-pages/PlaceOrdersPage";
import SettingsPage from "App/pages/main-pages/SettingsPage";
import SupportPage from "App/pages/main-pages/SupportPage";
import TrackOrderPage from "App/pages/main-pages/TrackOrderPage";
import { Alert, Slide } from "native-base";
import { useContext, useEffect, useState } from "react";
import { Text } from "react-native";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  const { isAuth } = useAuth();
  return (
    <>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/*    
          
          {fontsLoaded && isAuthenticated ? (
          <>
            <SideNavigator />
          </>
        ) : (
          <AuthNavigator />
        )} 
         
         
         */}

        {isAuth === null ? (
          <>
            <Stack.Screen name="AuthNavigator" component={AuthNavigator} />
            {/* <Stack.Screen name="SuccessFulPage" component={SuccessFulPage} /> */}
          </>
        ) : (
          <>
            {/* <Stack.Screen name="AuthNavigator" component={AuthNavigator} /> */}

            <Stack.Screen name="Onboarding" component={SideNavigator} />
            <Stack.Screen
              options={{
                presentation: "containedModal",
              }}
              name="MainPlaceOrdersPage"
              component={PlaceOrdersPage}
            />
            <Stack.Screen name="TrackOrderPage" component={TrackOrderPage} />
            <Stack.Screen name="MyProfilePage" component={MyProfilePage} />
            <Stack.Screen name="SettingsPage" component={SettingsPage} />
            <Stack.Screen name="SupportPage" component={SupportPage} />
            <Stack.Screen name="SuccessFulPage" component={SuccessFulPage} />
          </>
        )}

        {/*   <Stack.Screen name="AuthNavigator" component={AuthNavigator} />
        <Stack.Screen name="Onboarding" component={SideNavigator} />
        <Stack.Screen
          options={{
            presentation: "containedModal",
          }}
          name="MainPlaceOrdersPage"
          component={PlaceOrdersPage}
        />
        <Stack.Screen name="TrackOrderPage" component={TrackOrderPage} />
        <Stack.Screen name="SuccessFulPage" component={SuccessFulPage} /> */}
      </Stack.Navigator>
    </>
  );
};

export default StackNavigator;
