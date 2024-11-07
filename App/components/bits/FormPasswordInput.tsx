import { Ionicons } from "@expo/vector-icons";
import Colors from "App/config/Colors";
import { screenHeight, screenWidth } from "App/constants/Sizes";
import React, { useState } from "react";
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
}

const FormPasswordInput: React.FC<FormInputProps> = ({
  name,
  type = "text",
  placeholder,
  defaultValue,
  label,
  disabled,
  padding = Platform.OS === "android" ? screenWidth(0.035) : screenWidth(0.05),
  width = "100%",
  bottom = screenHeight(0.02),
  labelColor = Colors.DEFAULT_GREY,
  background = "#F5F5F5",
  required = false,
  formik,
  max,
  IconRight,
  IconLeft,
  hint,
}) => {
  const [open, setOpen] = useState(true);
  return (
    <View style={[styles.container, { width, marginBottom: bottom }]}>
      {label && (
        <Text style={[styles.label, { color: labelColor }]}>{label}</Text>
      )}
      <View
        style={[
          styles.inputContainer,
          {
            borderColor: formik?.errors?.[name] ? "#E10000" : "#F5F5F5",
            backgroundColor: background,
          },
        ]}
      >
        <View style={styles.inputWrapper}>
          {IconLeft && (
            <View style={{ paddingLeft: padding }}>
              <IconLeft width="20px" height="20px" />
            </View>
          )}
          <TextInput
            style={[
              styles.textInput,
              {
                paddingTop: padding,
                paddingBottom: padding,
                paddingLeft: padding,
                paddingRight: padding,
              },
            ]}
            secureTextEntry={open}
            keyboardType={type === "number" ? "numeric" : "default"}
            placeholder={placeholder}
            defaultValue={defaultValue}
            editable={!disabled}
            onChangeText={formik?.handleChange(name)}
            value={formik?.values?.[name]}
            maxLength={max}
          />
          <View style={{ paddingRight: padding }}>
            <Ionicons
              onPress={() => {
                setOpen(!open);
              }}
              name={open ? "eye-outline" : "eye-off-outline"}
              size={15}
              color={Colors.OTHER_GREY}
            />
          </View>
        </View>
      </View>
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
  container: {},
  label: {
    fontSize: screenWidth(0.043),
    fontWeight: "400",
    color: "#36394A",
    marginBottom: 6,
    fontFamily: "regular400",
  },
  inputContainer: {
    borderWidth: 2,
    borderRadius: 8,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
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

export default FormPasswordInput;
