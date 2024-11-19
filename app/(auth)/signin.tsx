import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import CustomSafeAreaView from "@/components/ui/CustomSafeArea";
import LottieView from "lottie-react-native";
import { siginStyles } from "@/styles/signinStyles";
import CustomText from "@/components/ui/CustomText";
import { signinWithGoogle } from "@/services/api/authService";

export default function signin() {
  async function handleSignin() {
    await signinWithGoogle();
  }

  return (
    <CustomSafeAreaView style={siginStyles.container}>
      <LottieView
        autoPlay
        loop
        style={siginStyles.animation}
        source={require("@/assets/animations/telegram.json")}
      />

      <CustomText
        variant="h3"
        style={siginStyles.title}
        numberOfLines={undefined}
      >
        Welcome to Whisper
      </CustomText>
      <CustomText
        variant="h4"
        style={siginStyles.message}
        numberOfLines={undefined}
      >
        Messages are heavily encrypted
      </CustomText>
      <TouchableOpacity onPress={handleSignin} style={siginStyles.loginBtn}>
        <Image
          style={siginStyles.googleIcon}
          source={require("@/assets/icons/google.png")}
        />
        <CustomText style={siginStyles.loginBtnText}>
          Sign in with Google
        </CustomText>
      </TouchableOpacity>
    </CustomSafeAreaView>
  );
}

const styles = StyleSheet.create({});
