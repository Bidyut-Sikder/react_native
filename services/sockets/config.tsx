

import { Platform } from "react-native";


export const BASE_URL=Platform.OS==='android'?"http://10.0.2.2:3000":"http://localhost:3000"
export const SOCKET_URL=Platform.OS==='android'?"ws://10.0.2.2:3000":"ws://localhost:3000"


//use your network ip or hosted url 
//export const BASE_URL="http://192.168.1.100:3000"
//export const SOCKET_URL="ws://192.168.1.100:3000"







