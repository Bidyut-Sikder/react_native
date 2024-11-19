import { StyleSheet, Text, TextStyle, View } from "react-native";
import React, { FC, ReactNode } from "react";
import { Stack } from "expo-router";



export default function AuthLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="home" />
     
    </Stack>
  );
}

const styles = StyleSheet.create({});