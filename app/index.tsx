import { Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { splashStyles } from "@/styles/splashStyles";
import { resetAndNavigate } from "@/utils/LibraryHelpers";
import { tokenStorage } from "@/services/sockets/storage";

interface DecodedToken {
  exp: number;
}

export default function Main() {
  const tokenCheck = async () => {
    const accessToken = tokenStorage.getString("accessToken") as string;
    const refreshToken = tokenStorage.getString("refreshToken") as string;

    if (accessToken) {
      const decodedAccessToken = jwtDecode<DecodedToken>(accessToken);
      const decodedRefreshToken = jwtDecode<DecodedToken>(refreshToken);
    }

    
    
    resetAndNavigate("/(home)/home");

    return false;
  };

  useEffect(() => {
    setTimeout(() => {
      resetAndNavigate("/(auth)/signin");
    }, 300);
  }, []);

  return (
    <View style={splashStyles.container}>
      <Image
        style={splashStyles.logo}
        source={require("@/assets/images/adaptive-icon.png")}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
