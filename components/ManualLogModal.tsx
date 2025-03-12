import React from "react";
import {
  Modal as RNModal,
  ModalProps,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import ManualLogForm from "./ManualLogForm";

type ManualLogModalProps = ModalProps & {
  isOpen: boolean;
  closeModal: () => void;
};

const ManualLogModal = ({
  isOpen,
  closeModal,
  ...rest
}: ManualLogModalProps) => {
  return (
    <RNModal
      visible={isOpen}
      transparent
      animationType="fade"
      statusBarTranslucent
      {...rest}
    >
      <KeyboardAvoidingView
        className="items-center justify-center flex-1 px-3 bg-zinc-900/40"
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ManualLogForm closeModal={closeModal} />
      </KeyboardAvoidingView>
    </RNModal>
  );
};

export default ManualLogModal;
