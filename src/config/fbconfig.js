import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyABavGN8VYDNsKHOgYhHyB6Z896-PaEt0M",
    authDomain: "marioplan-7836f.firebaseapp.com",
    databaseURL: "https://marioplan-7836f.firebaseio.com",
    projectId: "marioplan-7836f",
    storageBucket: "marioplan-7836f.appspot.com",
    messagingSenderId: "118986432327",
    appId: "1:118986432327:web:79ad7cdf9d6fa886b23662",
    measurementId: "G-Z6FZGP2WJK"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  firebase.firestore().settings({timestampsInSnapshots: true})

  export default firebase;