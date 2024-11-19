

import { Platform } from "react-native";


export const BASE_URL=Platform.OS=='android'?"http://192.168.43.60:3000":"http://localhost:3000"//phone without cable
// export const BASE_URL=Platform.OS=='android'?"http://10.0.2.2:3000":"http://localhost:3000"//emulator
export const SOCKET_URL=Platform.OS==='android'?"ws://10.0.2.2:3000":"ws://localhost:3000"


//use your network ip or hosted url 
//export const BASE_URL="http://192.168.43.60:3000"//device phone ip address(wifi)
//export const BASE_URL="http://10.0.2.2:3000"// pc emulator ip address
//export const SOCKET_URL="ws://192.168.1.100:3000"






















