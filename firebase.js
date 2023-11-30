import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCZp1QCwhGYfu5pHQQthbrV2jNkweVkdHE",
  authDomain: "todoauth-cc556.firebaseapp.com",
  projectId: "todoauth-cc556",
  storageBucket: "todoauth-cc556.appspot.com",
  messagingSenderId: "868038349820",
  appId: "1:868038349820:web:9b617d1cf85bdc1068d879",
  measurementId: "G-6YBGJHF0MD"
};

const app = initializeApp(firebaseConfig);
export const auth = getAnalytics(app);