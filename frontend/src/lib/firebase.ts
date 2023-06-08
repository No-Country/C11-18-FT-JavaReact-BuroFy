// Import the functions you need from the SDKs you need
import { FirebaseOptions, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
import {getDownloadURL, getStorage, ref, uploadBytes} from "firebase/storage";

const firebase_configuration: FirebaseOptions = {
  apiKey: process.env.NEXT_PUBLIC_APIKEY,
  authDomain: process.env.NEXT_PUBLIC_AUTHDOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECTID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGEBUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGINGSENDERID,
  appId: process.env.NEXT_PUBLIC_APPID,
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENTID,
};

// Initialize Firebase
const app = initializeApp(firebase_configuration);

export const storage = getStorage(app);

export async function uploadFile(file : Blob , id : string) {
  if (file ) {
    const storageRef = ref(storage, `profileImages/${id}`);
    await uploadBytes(storageRef, file ) ;
    const url = await getDownloadURL(storageRef);
    return url;
  }
}

export const firebase_auth = getAuth(app);
// export const analytics = getAnalytics(app);
