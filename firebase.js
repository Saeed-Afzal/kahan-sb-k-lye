// // // Import the functions you need from the SDKs you need
// import * as firebase from "firebase";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries


// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCLA4vnLFaVow25ylLUkb57NhmnN6qk1vE",
//   authDomain: "fir-auth-65294.firebaseapp.com",
//   projectId: "fir-auth-65294",
//   storageBucket: "fir-auth-65294.appspot.com",
//   messagingSenderId: "105428798939",
//   appId: "1:105428798939:web:49a9375f32ea94d4dfebfe"
// };

// // Initialize Firebase
// // let app;
// // if (firebase.apps.length === 0) {
// //   app = firebase.initializeApp(firebaseConfig);
// // } else {
// //   app = firebase.app()
// // }

// const auth = getAuth();
// // export { auth };





import firebase from "firebase/app"
import "firebase/auth"
import 'firebase/firestore'
import { getFirestore } from "firebase/firestore";



const app = firebase.initializeApp({
  apiKey: "AIzaSyBWrE8pje8rugRE5aOqEtWv_1iHkMqcxFM",
  authDomain: "finalhackathonr.firebaseapp.com",
  projectId: "finalhackathonr",
  storageBucket: "finalhackathonr.appspot.com",
  messagingSenderId: "265911613903",
  appId: "1:265911613903:web:04d984b1f510c6f58e7aba"

})

export const auth = app.auth()
export const db = app.firestore();



export default app
