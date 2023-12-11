import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBquYYDcBA-aoFYvh_K36nsSy9iRYovWKY",
  authDomain: "todo-islam-third-try.firebaseapp.com",
  projectId: "todo-islam-third-try",
  storageBucket: "todo-islam-third-try.appspot.com",
  messagingSenderId: "811081396868",
  appId: "1:811081396868:web:07880940ddc8db412e08d1",
  measurementId: "G-GTSSJKVRD0"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)