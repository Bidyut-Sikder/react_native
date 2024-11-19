// import { SafeAreaView, StyleSheet, Text, View, ViewStyle } from "react-native";
import { StyleSheet, Text, View, ViewStyle } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import React, { FC } from "react";
import { Colors } from "@/utils/Constants";

interface CustomProps {
  children: React.ReactNode;
  style?: ViewStyle;
}

const CustomSafeAreaView: FC<CustomProps> = ({ children, style }) => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={[styles.container, style]}>
          {/* <SafeAreaView /> */}
          {children}
        </View>
      </SafeAreaView>
    </SafeAreaProvider>

    // <View style={[styles.container,style]}>
    //   <SafeAreaView />
    //   {children}
    // </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.secondary,
  },
});

export default CustomSafeAreaView;
