import axios from "axios";
import { BASE_URL } from "../sockets/config";

export const uploadFile = async (data: any) => {
  try {
    const formData = new FormData() as any ; formData?.append("image", {
      uri: data?.uri,
      name: data?.name,
      type: data?.type,
    });


      console.log(`${BASE_URL}/file/upload`);


    const res = await axios.post(`${BASE_URL}/file/upload`,formData,{
      headers: {
        "Content-Type": "multipart/form-data",
        },
    });
  
     return res.data?.mediaUrl;
  } catch (error) {
    console.log(error);
    return null;
  }
};

// interface FileData {
//     uri: string;
//     name: string;
//     type: string;
// }

// export const uploadFile = async (data: any): Promise<string | null> => {
//     if (!data?.uri || !data?.name || !data?.type) {
//         console.error('Invalid file data provided.');
//         return null;
//     }

//     try {
//         const formData = new FormData();
//         formData.append('image', {
//             uri: data.uri,
//             name: data.name,
//             type: data.type,
//         });

//         const res = await axios.post(`${BASE_URL}/file/upload`, formData, {
//             headers: {
//                 "Content-Type": "multipart/form-data",
//             },
//             timeout: 10000, // 10 seconds timeout
//         });

//         return res.data?.mediaUrl || null;
//     } catch (error: any) {
//         console.error("File upload failed:", error?.message || error);
//         return null;
//     }
// };
