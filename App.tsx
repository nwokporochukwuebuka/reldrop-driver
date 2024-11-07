import "./gesture-handler.native";
import "react-native-get-random-values";
import { LogBox, StyleSheet, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { AuthNavigator } from "App/navigation/AuthNavigator";
import { useFonts } from "expo-font";
import {
  WorkSans_100Thin,
  WorkSans_100Thin_Italic,
  WorkSans_200ExtraLight,
  WorkSans_200ExtraLight_Italic,
  WorkSans_300Light,
  WorkSans_300Light_Italic,
  WorkSans_400Regular,
  WorkSans_400Regular_Italic,
  WorkSans_500Medium,
  WorkSans_500Medium_Italic,
  WorkSans_700Bold,
  WorkSans_700Bold_Italic,
  WorkSans_800ExtraBold,
  WorkSans_800ExtraBold_Italic,
  WorkSans_900Black,
  WorkSans_900Black_Italic,
  WorkSans_600SemiBold,
  WorkSans_600SemiBold_Italic,
} from "@expo-google-fonts/work-sans";
import SideNavigator from "App/navigation/SideNavigator";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StackNavigator from "StackNavigator";
import Loader from "App/components/Loader";
import { Alert, NativeBaseProvider, Slide } from "native-base";
import {
  QueryClient,
  QueryClientProvider,
  focusManager,
} from "@tanstack/react-query";
import { useOnlineManager } from "App/hooks/useOnlineManager";
import MainContext, { MainProvider } from "App/context/global.context";
import { useContext } from "react";
import * as SecureStore from "expo-secure-store";

const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: 2 } },
});

const IGNORED_LOGS = [
  "Non-serializable values were found in the navigation state",
];

LogBox.ignoreLogs(["Warning: ..."]); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications

export default function App() {
  const isAuthenticated = true;
  const [fontsLoaded] = useFonts({
    italic600: WorkSans_600SemiBold_Italic,
    regular600: WorkSans_600SemiBold,
    regular100: WorkSans_100Thin,
    italic100: WorkSans_100Thin_Italic,
    regular200: WorkSans_200ExtraLight,
    italic200: WorkSans_200ExtraLight_Italic,
    regular300: WorkSans_300Light,
    italic300: WorkSans_300Light_Italic,
    regular400: WorkSans_400Regular,
    italic400: WorkSans_400Regular_Italic,
    regular500: WorkSans_500Medium,
    italic500: WorkSans_500Medium_Italic,
    regular700: WorkSans_700Bold,
    italic700: WorkSans_700Bold_Italic,
    regular800: WorkSans_800ExtraBold,
    italic800: WorkSans_800ExtraBold_Italic,
    regular900: WorkSans_900Black,
    italic900: WorkSans_900Black_Italic,
  });
  const Stack = createNativeStackNavigator();

  /*  const { data: businessIndustryList } = useQuery({
    queryKey: ["GetBusinessIndustryQuery"],
    queryFn: () => ApiServiceMerchant.GetBusinessIndustryQuery(),
  }); */

  if (!fontsLoaded) {
    return <Loader />;
  }

  //useOnlineManager();
  return (
    <>
      {/*  <Splash onLayout={onLayoutRootView} /> */}
      <NativeBaseProvider>
        <QueryClientProvider client={queryClient}>
          <MainProvider>
            <NavigationContainer>
              <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen
                  name="StackNavigator"
                  component={StackNavigator}
                />
              </Stack.Navigator>
            </NavigationContainer>
          </MainProvider>
        </QueryClientProvider>
      </NativeBaseProvider>
    </>
  );
}

const style = StyleSheet.create({
  body: {
    backgroundColor: "#fff",
    flex: 1,
    color: "#000",
  },
});
