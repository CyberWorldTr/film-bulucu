import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6UoKZLZ1WKZLlF3nOCtAP3qMW0JfRV7I",
  authDomain: "filmbulucu-de687.firebaseapp.com",
  projectId: "filmbulucu-de687",
  storageBucket: "filmbulucu-de687.appspot.com",
  messagingSenderId: "755939656187",
  appId: "1:755939656187:web:93e18127e7953b87c78b5e"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };