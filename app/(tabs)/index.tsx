import React, { useState } from "react";

import { ThemedText } from "@/components/ThemedText";
import { APP_NAME } from "@/constants/AppConstants";
import { Collapsible } from "@/components/Collapsible";
import { Button } from "react-native-paper";
import ManualLogModal from "@/components/ManualLogModal";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {
  const [isManualLogOpen, setIsManualLogOpen] = useState(false);

  return (
    <SafeAreaView className="flex flex-col m-10 mt-20 gap-8">
      <ThemedText type="title">{APP_NAME}</ThemedText>
      <ThemedText type="default">Welcome back, TheLegend27!</ThemedText>
      <Button
        icon="pencil-box-outline"
        mode="contained"
        onPress={() => setIsManualLogOpen(true)}
      >
        Log Manual Play
      </Button>
      <Collapsible title={"Recent Plays"}></Collapsible>
      <ManualLogModal
        isOpen={isManualLogOpen}
        closeModal={() => setIsManualLogOpen(false)}
      ></ManualLogModal>
    </SafeAreaView>
  );
};

export default HomeScreen;
