import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyD-AIJmQHU4xF2SxT7tl6eZblEOpUG3jYI",
    authDomain: "itpmproject-cbbd6.firebaseapp.com",
    projectId: "itpmproject-cbbd6",
    storageBucket: "itpmproject-cbbd6.appspot.com",
    messagingSenderId: "729353919755",
    appId: "1:729353919755:web:bbdc5628a7d9e6ef55160e",
    measurementId: "G-0FWMM0ZTP7"
};
  
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;