import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomSafeArea from "@/components/ui/CustomSafeArea";
import LottieView from "lottie-react-native";
import { siginStyles } from "@/styles/signinStyles";

export default function signin() {
  return (
    <CustomSafeArea style={siginStyles.container}>
      <LottieView
        autoPlay
        loop
        style={siginStyles.animation}
        source={require("@/assets/animations/telegram.json")}
      />

      <Text>Page</Text>
      <Text>Page</Text>
      <Text>Page</Text>
      <Text>Page</Text>
      <Text>Page</Text>
      <Text>Page</Text>
    </CustomSafeArea>
  );
}

const styles = StyleSheet.create({});
