import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthStackParamList } from "App/types/navigation";
import OnboardPage from "App/pages/auth-pages/OnboardPage";
import CreateAccountPage from "App/pages/auth-pages/CreateAccountPage";
import VerifyAccountPage from "App/pages/auth-pages/VerifyAccountPage";
import AlmostTherePage from "App/pages/auth-pages/AlmostTherePage";
import LoginPage from "App/pages/auth-pages/LoginPage";

const AuthStack = createNativeStackNavigator<AuthStackParamList>();

export const AuthNavigator: React.FC = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen
      name="OnboardPage"
      component={OnboardPage}
      options={{
        headerShown: false,
      }}
    />
    <AuthStack.Screen
      name="CreateAccount"
      component={CreateAccountPage}
      options={{
        headerShown: false,
      }}
    />
    <AuthStack.Screen
      name="VerifyAccount"
      component={VerifyAccountPage}
      options={{
        headerShown: false,
      }}
    />
    <AuthStack.Screen
      name="AlmostThere"
      component={AlmostTherePage}
      options={{
        headerShown: false,
      }}
    />
    <AuthStack.Screen
      name="Login"
      component={LoginPage}
      options={{
        headerShown: false,
      }}
    />
  </AuthStack.Navigator>
);
