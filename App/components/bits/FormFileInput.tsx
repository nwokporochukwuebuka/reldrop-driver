import { Ionicons } from "@expo/vector-icons";
import DropDownIcon from "App/assets/icons/DropDownIcon";
import Colors from "App/config/Colors";
import { screenHeight, screenWidth } from "App/constants/Sizes";
import { CheckCircleIcon, CheckIcon, Radio, Select } from "native-base";
import React, { useState } from "react";
import {
  TextInput,
  View,
  Text,
  StyleSheet,
  GestureResponderEvent,
  Platform,
  Alert,
  TouchableOpacity,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import ImgUploadBox from "App/assets/icons/ImgUploadBox";
import { Image } from "expo-image";

interface FormInputProps {
  name: string;
  type?: string;
  placeholder?: string;
  defaultValue?: string;
  label?: string;
  disabled?: boolean;
  padding?: string;
  width?: string;
  bottom?: number | string;
  labelColor?: string;
  background?: string;
  required?: boolean;
  formik?: any; // Replace `any` with the actual Formik type if available
  max?: number;
  IconRight?: React.FC<{ width: string; height: string }>;
  IconLeft?: React.FC<{ width: string; height: string }>;
  hint?: string;
  options: Array<object>;
}

const FormFileInput: React.FC<FormInputProps> = ({
  name,
  placeholder,
  label,
  disabled,
  padding = Platform.OS === "android" ? screenWidth(0.035) : screenWidth(0.05),
  width = "100%",
  bottom = screenHeight(0.02),
  labelColor = Colors.DEFAULT_GREY,
  background = "#F5F5F5",
  formik,
  options,
  hint,
}) => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status !== "granted") {
      // If permission is denied, show an alert
      Alert.alert(
        "Permission Denied",
        `Sorry, we need camera 
             roll permission to upload images.`
      );
    } else {
      // Launch the image library and get
      // the selected image
      const result: any = await ImagePicker.launchImageLibraryAsync();

      if (!result.cancelled) {
        // If an image is selected (not cancelled),
        // update the file state variable
        setFile(result.uri);

        // Clear any previous errors
        setError(null);
      }
    }
  };
  return (
    <View style={{ width: width, marginBottom: bottom }}>
      {label && (
        <Text style={[styles.label, { color: labelColor }]}>{label}</Text>
      )}
      <TouchableOpacity onPress={pickImage}>
        <Image
          style={{
            width: "100%",
            height: screenWidth(0.36),
          }}
          source={require("App/assets/icons/ImgUploadBox.png")}
        />
        {file ? (
          <Image source={{ uri: file }} />
        ) : (
          // Display an error message if there's
          // an error or no image selected
          <Text style={styles.errorText}>{error}</Text>
        )}
      </TouchableOpacity>

      {formik?.errors?.[name] ? (
        <View style={styles.errorContainer}>
          <View style={styles.errorIcon} />
          <Text style={styles.errorText}>{formik.errors[name]}</Text>
        </View>
      ) : hint ? (
        <Text style={styles.hintText}>{hint}</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: screenWidth(0.043),
    fontWeight: "400",
    color: "#36394A",
    marginBottom: 16,
    fontFamily: "regular400",
  },

  textInput: {
    flex: 1,
    fontSize: 16,
    color: "#36394A",
  },
  errorContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },
  errorText: {
    color: "#E10000",
    fontSize: 12,
    marginLeft: 4,
  },
  errorIcon: {
    width: 14,
    height: 14,
    backgroundColor: "#E10000",
    borderRadius: 7,
  },
  hintText: {
    color: "#818898",
    fontSize: 12,
    marginTop: 4,
  },
});

export default FormFileInput;
