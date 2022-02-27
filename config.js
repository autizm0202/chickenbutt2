import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyDxQxoDt3Sc95xHWshbxNQCTZDO-LrymCE",
  authDomain: "chickenbutt-cddec.firebaseapp.com",
  projectId: "chickenbutt-cddec",
  storageBucket: "chickenbutt-cddec.appspot.com",
  messagingSenderId: "293607174115",
  appId: "1:293607174115:web:e319e3b8ad4e81ee30bad6"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
