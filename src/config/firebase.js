import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyB3Q91QDF4cNZDMwAGjAIvtmmKPClsMKSY",
    authDomain: "nucamp-interview-project.firebaseapp.com",
    projectId: "nucamp-interview-project",
    storageBucket: "nucamp-interview-project.appspot.com",
    messagingSenderId: "262008109490",
    appId: "1:262008109490:web:33f192b1ae47f7bacd4cab",
    measurementId: "G-KR7C360PHG"
  };

  firebase.initializeApp(firebaseConfig)

  export const auth = firebase.auth()
  export const db = firebase.firestore()

  export default firebase;