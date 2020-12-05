  import firebase from 'firebase/app';
  import 'firebase/firestore';
  import 'firebase/auth';
  import 'firebase/firebase-analytics';  
  
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyDmZylTsZMzzzZ_gNv5Epm0O96z-j4rIvQ",
    authDomain: "net-ninja-marioplan-dc643.firebaseapp.com",
    projectId: "net-ninja-marioplan-dc643",
    storageBucket: "net-ninja-marioplan-dc643.appspot.com",
    messagingSenderId: "500479416346",
    appId: "1:500479416346:web:5f08bc3beccb484bb219a3",
    measurementId: "G-PC3JLGZZ6Q"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore();
  firebase.analytics();

  export default firebase;