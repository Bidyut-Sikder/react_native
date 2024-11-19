import {
  ActivityIndicator,
  Alert,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import CustomSafeAreaView from "@/components/ui/CustomSafeArea";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";
import { router } from "expo-router";
import { siginStyles } from "@/styles/signinStyles";
import { signupStyles } from "@/styles/signupStyles";
import { launchGallery } from "@/utils/LibraryHelpers";
import CustomText from "@/components/ui/CustomText";

export default function signup() {
  console.log("this is signup page");
  const [firstName, setFirstName] = useState("");
  const [profilePic, setProfilePic] = useState({ uri: "" });
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleImagePic() {
    const res = await launchGallery();
    if (res) {
      setProfilePic({ uri: res.uri });
    }
  }

  async function createAccount() {
    if (!username || !firstName || !lastName || !profilePic.uri) {
      Alert.alert("Error", "Please fill all the fields");
      return;
    }
    setLoading(true);

    try {
const mediaUrl=await uploadFile(profilePic)

await signUpWithGoogle({
  username:username,
  first_name:firstName,
  last_name:lastName
  profile_picture:mediaUrl
})

    } catch (error) {

    }finally{
      setLoading(false)
    }
  }

  return (
    <CustomSafeAreaView style={{ backgroundColor: "green" }}>
      <TouchableOpacity onPress={() => router.back()}>
        <Ionicons name="arrow-back-outline" size={RFValue(25)} color="#ffff" />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={handleImagePic}
        style={signupStyles.cameraIcon}
      >
        {profilePic?.uri ? (
          <Image style={signupStyles.image} source={{ uri: profilePic?.uri }} />
        ) : (
          <MaterialCommunityIcons
            name="camera-plus"
            size={RFValue(18)}
            color="#ffff"
          />
        )}
      </TouchableOpacity>

      <CustomText variant="h4" style={signupStyles.profileText}>
        Profile Info
      </CustomText>
      <CustomText style={signupStyles.instructions}>
        Enter your unique username,name and profile Photo
      </CustomText>

      <View style={signupStyles.footer}>
        <CustomText style={signupStyles.termsText}>
          By signing up, you agree to our Terms of Service and Privacy Policy
        </CustomText>
        <TouchableOpacity
          onPress={createAccount}
          style={signupStyles.submitButton}
        >
          {!loading ? (
            <MaterialCommunityIcons
              name="arrow-right"
              color={"#ffff"}
              size={RFValue(24)}
            />
          ) : (
            <ActivityIndicator size="small" color="#0000ff" />
          )}
        </TouchableOpacity>
      </View>
    </CustomSafeAreaView>
  );
}

const styles = StyleSheet.create({});
