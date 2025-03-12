import { View } from "react-native";
import React from "react";
import { Control, Controller, FieldValues } from "react-hook-form";
import { TextInput } from "react-native-paper";

type CustomTextInputProps = {
  control: Control<FieldValues>;
  name: string;
  placeholder: string;
};

const CustomTextInput = ({ control, name, placeholder }: CustomTextInputProps) => {
  return (
    <View>
      <Controller
        control={control}
        name={name}
        render={({ field: { value, onChange } }) => (
          <TextInput
            label={placeholder}
            value={value}
            mode="outlined"
            onChangeText={onChange}
          />
        )}
      ></Controller>
    </View>
  );
};

export default CustomTextInput;
