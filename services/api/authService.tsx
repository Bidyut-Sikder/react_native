import axios from "axios";
import { BASE_URL } from "../sockets/config";
import { tokenStorage } from "../sockets/storage";
import { useAuthStore } from "../sockets/authStore";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { resetAndNavigate } from "@/utils/LibraryHelpers";
import { appAxios } from "./apiIntercepter";

GoogleSignin.configure({
  webClientId:
    "616057070104-egd5lphac6e50c78am1st7s3m21imftu.apps.googleusercontent.com",
  forceCodeForRefreshToken: true,
  offlineAccess: false,
});

export const signinWithGoogle = async () => {
  try {
    await GoogleSignin.hasPlayServices();

    await GoogleSignin.signOut();
    const res = await GoogleSignin.signIn();

    console.log(`${BASE_URL}/oauth/login`);
    const apiRes = await axios.post(`${BASE_URL}/oauth/login`, {
      id_token: res.data?.idToken,
      first_name: "bidyut",
      last_name: "sikder",
      username: "bidyusikder",
      profile_picture: "photo url",
    });
    // console.log(apiRes);
    const { tokens, user } = apiRes.data;

    tokenStorage.set("accessToken", tokens?.access_token);
    tokenStorage.set("refreshToken", tokens?.refresh_token);

    const { setUser } = useAuthStore.getState();
    setUser(user);
    resetAndNavigate("/(home)/home");
  } catch (error: any) {
    console.log(error);
    console.log(error.response.status);

    if (error.response.status === 400) {
      resetAndNavigate("/(auth)/signup");
    }
  }
};

export const signUpWithGoogle = async (data: any) => {
  try {
    await GoogleSignin.hasPlayServices();

    await GoogleSignin.signOut();
    const res = await GoogleSignin.signIn();

    console.log(`${BASE_URL}/oauth/login`);
    const apiRes = await axios.post(`${BASE_URL}/oauth/login`, {
      id_token: res.data?.idToken,
      ...data,
    });
    // console.log(apiRes);
    const { tokens, user } = apiRes.data;

    tokenStorage.set("accessToken", tokens?.access_token);
    tokenStorage.set("refreshToken", tokens?.refresh_token);

    const { setUser } = useAuthStore.getState();
    setUser(user);
    resetAndNavigate("/(home)/home");
  } catch (error: any) {
    console.log(error);
  }
};

export const checkUsername = async (username: string) => {
  try {
    const apiRes = await axios.post(`${BASE_URL}/oauth/check-username`, {
      username,
    });
    return apiRes.data?.available;
  } catch (error) {
    return false;
  }
};
