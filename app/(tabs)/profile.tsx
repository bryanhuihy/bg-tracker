import React from "react";
import { Image, View } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { SegmentedButtons } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

const TabThreeScreen = () => {
  const [value, setValue] = React.useState("activity");

  return (
    <SafeAreaView className="flex flex-col mx-5">
      <View className="items-center justify-center flex mb-10">
        <Image
          source={require("@/assets/images/temp-profile-pic.jpg")}
          className="size-40 rounded-full m-10"
        />
        <ThemedText type="title" className="">
          TheLegend27
        </ThemedText>
        <ThemedText type="default" className="font-bold">
          Singapore
        </ThemedText>
      </View>
      <View className="items-center justify-center flex">
        <SegmentedButtons
          value={value}
          onValueChange={setValue}
          buttons={[
            {
              value: "activity",
              label: "Activity",
            },
            {
              value: "stats",
              label: "Stats",
            },
            {
              value: "friends",
              label: "Friends",
            },
          ]}
        />
      </View>
      <View className="items-center justify-center flex"></View>
    </SafeAreaView>
  );
};

export default TabThreeScreen;
