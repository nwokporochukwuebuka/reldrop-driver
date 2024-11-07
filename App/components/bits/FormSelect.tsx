import { Ionicons } from "@expo/vector-icons";
import DropDownIcon from "App/assets/icons/DropDownIcon";
import Colors from "App/config/Colors";
import { screenHeight, screenWidth } from "App/constants/Sizes";
import { CheckCircleIcon, CheckIcon, Select } from "native-base";
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
}

const FormSelect: React.FC<FormInputProps> = ({
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
  return (
    <View style={{ width: width, marginBottom: bottom }}>
      {label && (
        <Text style={[styles.label, { color: labelColor }]}>{label}</Text>
      )}
      <Select
        selectedValue={formik?.values?.[name]}
        dropdownIcon={
          <View style={{ paddingRight: 10 }}>
            <DropDownIcon />
          </View>
        }
        isDisabled={disabled}
        backgroundColor={background}
        borderColor={formik?.errors?.[name] ? "#E10000" : "#F5F5F5"}
        borderWidth={2}
        padding={padding}
        borderRadius={8}
        accessibilityLabel={placeholder}
        placeholder={placeholder}
        _selectedItem={{
          bg: Colors.LIGHT_BLUE,
          borderRadius: 8,
          _text: {
            color: Colors.DEFAULT_WHITE,
          },
        }}
        mt={1}
        onValueChange={(itemValue) => formik?.setFieldValue(name, itemValue)}
      >
        {options?.map((item: any) => {
          return <Select.Item label={item.label} value={item.value} />;
        })}
      </Select>
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
    marginBottom: 6,
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

export default FormSelect;
