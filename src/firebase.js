<<<<<<< HEAD
=======

>>>>>>> a97038259a5bf8281492e77c3e7a72081c0cc7f9
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth} from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyCHFVcMopATyuR_D61Cvm746IgBUX2ScJo",
  authDomain: "todo-react-with-auth.firebaseapp.com",
  projectId: "todo-react-with-auth",
  storageBucket: "todo-react-with-auth.appspot.com",
  messagingSenderId: "367287123093",
  appId: "1:367287123093:web:af951c2aeaa06edfb46f9c"
};


const app = initializeApp(firebaseConfig);
<<<<<<< HEAD
export const db = getFirestore(app);
=======
export const db = getDatabase(app)
export const auth = getAuth()

>>>>>>> a97038259a5bf8281492e77c3e7a72081c0cc7f9
