import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
  apiKey:"AIzaSyDnf3X_pXI9-Na9BpFX32D_itQgSfS0ORI",
  authDomain: "aicte-web.firebaseapp.com",
  //databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: "aicte-web",
  storageBucket: "aicte-web.appspot.com",
  messagingSenderId: "293842886170",
  appId: "1:293842886170:web:5f85cc892397cc7cf0fba3"
})

export const auth = app.auth()
export default app
