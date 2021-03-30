import * as firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyAdkfQA1ddS3MKdMty8IGFUb6mLSzdwMl0",
  authDomain: "modern-class.firebaseapp.com",
  databaseURL: "https://modern-class.firebaseio.com",
  projectId: "modern-class",
  storageBucket: "gs://modern-class.appspot.com",
  // messagingSenderId: "350938905714",
  appId: "1:39273296971:ios:3bbfe534c276a635f809ce",
  // measurementId: "G-6PWTZ0D3S1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
