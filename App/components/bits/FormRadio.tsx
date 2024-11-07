import { Ionicons } from "@expo/vector-icons";
import DropDownIcon from "App/assets/icons/DropDownIcon";
import Colors from "App/config/Colors";
import { screenHeight, screenWidth } from "App/constants/Sizes";
import { CheckCircleIcon, CheckIcon, Radio, Select } from "native-base";
import React from "react";
import {
  TextInput,
  View,
  Text,
  StyleSheet,
  GestureResponderEvent,
  Platform,
} from "react-native";

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
  flexDirection?: any;
}

const FormRadio: React.FC<FormInputProps> = ({
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
  flexDirection = "row",
}) => {
  return (
    <View style={{ width: width, marginBottom: bottom }}>
      {label && (
        <Text style={[styles.label, { color: labelColor }]}>{label}</Text>
      )}
      <Radio.Group
        name={name}
        accessibilityLabel="favorite number"
        value={formik?.values?.[name]}
        onChange={(nextValue) => {
          formik?.setFieldValue(name, nextValue);
        }}
        flexDirection={flexDirection}
        space={"3"}
      >
        {options?.map((item: any, index: number) => {
          return (
            <View
              style={{
                marginRight: 10,
              }}
            >
              <Radio
                fontFamily={"regular500"}
                color={Colors.LIGHT_BLUE}
                key={index}
                value={item.value}
                mx={0}
                borderColor={Colors.LIGHT_BLUE}
                size="lg"
                _checked={{
                  backgroundColor: Colors.DEFAULT_WHITE, // Use custom color when checked
                  borderColor: Colors.LIGHT_BLUE,
                  borderWidth: 2,
                  padding: 1,
                  borderRadius: 9999,
                }}
                _icon={{
                  color: Colors.LIGHT_BLUE, // Customize icon color inside the checked radio
                }}
              >
                <Text
                  style={{
                    color: labelColor,
                    fontFamily: "regular500",
                  }}
                >
                  {item.label}
                </Text>
              </Radio>
            </View>
          );
        })}
      </Radio.Group>
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

export default FormRadio;
