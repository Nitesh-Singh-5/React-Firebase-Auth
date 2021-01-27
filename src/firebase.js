import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
  apiKey: "AIzaSyBDbfjsiVD6RDFExXEnbxTp8KHr02VI1CU",
  authDomain: "auth-development-3cf1d.firebaseapp.com",
  projectId: "auth-development-3cf1d",
  storageBucket: "auth-development-3cf1d.appspot.com",
  messagingSenderId: "468014948985",
  appId: "1:468014948985:web:193d610c26646cb735aaa8"
})

export const auth = app.auth()
export default app
