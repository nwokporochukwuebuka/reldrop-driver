import { Ionicons } from "@expo/vector-icons";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import Logo from "App/assets/icons/Logo";
import AppButton from "App/components/bits/AppButton";
import FormInput from "App/components/bits/FormInput";
import PageBreadcrumb from "App/components/PageBreadcrumb";
import Colors from "App/config/Colors";
import { screenHeight, screenSize, screenWidth } from "App/constants/Sizes";
import { MainStackParamList } from "App/types/navigation";
import { Image } from "expo-image";
import { useFormik } from "formik";
import React, { useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ViewProps,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
  useWindowDimensions,
  FlatList,
  Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Actionsheet,
  Box,
  Center,
  CheckIcon,
  Menu,
  PresenceTransition,
  Select,
  useDisclose,
} from "native-base";
import VerifiedBigIcon from "App/assets/icons/VerifiedBigIcon";
import { useAuth } from "App/context/global.context";
import { EditProfileSchema } from "App/constants/Schema";
import FormNumberInput from "App/components/bits/FormNumberInput";
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

export function ProfileDetails({ user }: UserDrawer) {
  return (
    <View>
      <View style={styles.card}>
        <Text style={styles.title}>Name</Text>
        <Text style={styles.sub}>
          {user?.first_name} {user?.last_name}
        </Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.title}>Phone Number</Text>
        <Text style={styles.sub}>{user?.phone_number}</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.title}>Email address</Text>
        <Text style={styles.sub}> {user?.email}</Text>
      </View>
    </View>
  );
}

export function EditProfile({ user }: UserDrawer) {
  const { login } = useAuth();

  /*  const { mutate, isPending, error } = useMutation({
    mutationFn: ApiServiceAuth.LoginMutation,
    onSuccess: (data) => {
      setTimeout(() => {
        navigation.navigate("Onboarding");
      }, 2000);
      setTimeout(() => {
        login();
      }, 1000);
      save("token", data?.access_token);
    },
    onError: (error) => {
      console.log(error?.response, "errorerror");
      return;
    },
  }); */
  const formik = useFormik({
    initialValues: {
      email: user?.email,
      phone_number: user?.phone_number,
      name: `${user?.first_name} ${user?.last_name}`,
    },
    validationSchema: EditProfileSchema,
    onSubmit: (values) => console.log(values),
  });
  return (
    <View>
      <FormInput
        label="Full Name"
        placeholder="Enter your email address"
        name="name"
        width="100%"
        formik={formik}
      />
      <FormInput
        label="Email Address"
        placeholder="Enter your email address"
        name="email"
        width="100%"
        formik={formik}
      />
      <FormNumberInput
        label="Phone Number"
        placeholder="Enter your phone number"
        name="phone_number"
        width="100%"
        formik={formik}
      />
      <AppButton
        text="Save"
        backgroundColor={Colors.DARKER_BLUE}
        textColor={Colors.DEFAULT_WHITE}
        borderColor={Colors.DARKER_BLUE}
        onPress={() => {
          formik.handleSubmit();
        }}
      />
    </View>
  );
}

export default function MyProfilePage(
  props: React.JSX.IntrinsicAttributes &
    React.JSX.IntrinsicClassAttributes<View> &
    Readonly<ViewProps>
) {
  const [edit, setEdit] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclose();
  const { userData } = useAuth();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{
        flex: 1,
        backgroundColor: Colors.DEFAULT_WHITE,
      }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView {...props} style={styles.body}>
          <View
            style={{
              paddingHorizontal: screenWidth(0.04),
            }}
          >
            <PageBreadcrumb
              page="My Profile"
              onBackBtnPress={
                edit
                  ? () => {
                      setEdit(false);
                    }
                  : null
              }
              leftEnd={
                !edit && (
                  <>
                    <Menu
                      shadow={0}
                      background={Colors.DEFAULT_WHITE}
                      offset={10}
                      trigger={(triggerProps) => {
                        return (
                          <Pressable
                            accessibilityLabel="More options menu"
                            {...triggerProps}
                          >
                            <Ionicons name="ellipsis-vertical" size={20} />
                          </Pressable>
                        );
                      }}
                    >
                      <Menu.Item
                        onPress={() => {
                          setEdit(true);
                        }}
                      >
                        Edit Profile
                      </Menu.Item>
                      <Menu.Item>Delete Account</Menu.Item>
                    </Menu>
                  </>
                )
              }
            />
            <UserCard user={userData} />
            {edit ? (
              <EditProfile user={userData} />
            ) : (
              <ProfileDetails user={userData} />
            )}
          </View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: Colors.DEFAULT_WHITE,
    flex: 1,
  },
  title: {
    fontSize: screenWidth(0.05),
    width: "80%",
    fontFamily: "regular300",
    marginBottom: screenHeight(0.018),
  },
  sub: {
    fontFamily: "regular500",
    fontSize: screenWidth(0.05),
  },
  card: {
    paddingBottom: screenHeight(0.023),
    marginTop: screenHeight(0.013),
    borderBottomColor: Colors.LIGHT_BLUE2,
    borderBottomWidth: 0.6,
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
});
