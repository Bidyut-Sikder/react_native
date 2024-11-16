import { SafeAreaView, StyleSheet, Text, View, ViewStyle } from "react-native";
import React, { FC } from "react";
import { Colors } from "@/utils/Constants";

interface CustomProps {
  children: React.ReactNode;
  style?: ViewStyle;
}

const CustomSafeArea: FC<CustomProps> = ({children,style}) => {
  return (
    <View style={[styles.container,style]}>
      <SafeAreaView />
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:Colors.secondary
  }
})


export default CustomSafeArea;
