import React from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Text, TextInput, View } from "react-native";
import { Button } from "react-native-paper";
import CustomTextInput from "./FormFields/CustomTextInput";

type ManualLogFormProps = {
  closeModal: () => void;
  duration?: string;
};

type FormValues = {
  gameName: string;
  duration: string;
  players: string[];
  rating: number;
  notes: string;
};

const ManualLogForm = ({ closeModal, duration }: ManualLogFormProps) => {
  const { control, handleSubmit } = useForm();
  const onSubmit: SubmitHandler<FieldValues> = (data) => console.log(data);

  return (
    <View className="bg-white w-full rounded-xl p-5 gap-5">
      <Text className="font-bold text-lg">Log your most recent play</Text>
      <CustomTextInput control={control} name="gameName" placeholder="Game" />
      <CustomTextInput control={control} name="duration" placeholder="Duration" />
      <CustomTextInput control={control} name="players" placeholder="Players" />
      <CustomTextInput control={control} name="rating" placeholder="Ratings" />
      <CustomTextInput control={control} name="notes" placeholder="Notes" />
      <Button mode="contained" onPress={handleSubmit(onSubmit)}>
        <Text>Save</Text>
      </Button>
      <Button onPress={closeModal}>
        <Text>Close</Text>
      </Button>
    </View>
  );
};

export default ManualLogForm;
