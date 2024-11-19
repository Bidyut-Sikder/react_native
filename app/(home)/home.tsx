import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

const home = () => {
  console.log("this is home page");
  return (
    <View style={{ backgroundColor: "red" }}>
      <Text>home page</Text>
      <Text>home page</Text>
      <Text>home page</Text>
      <Text>home page</Text>
      <Text>home page</Text>
      <Text>home page</Text>
      <Text>home page</Text>
      <Text>home page</Text>
      <Text>home page</Text>
      <Text>home page</Text>
      <Text>home page</Text>
      <Text>home page</Text>
      <Text>home page</Text>
      <Link href={'/signup'}>signuup</Link>
    </View>
  );
};

export default home;
