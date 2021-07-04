 import firebase from 'firebase';
  var firebaseConfig = {
    apiKey: "AIzaSyCu4VgwGEatf4GsELzA1V7pWGLbS3zaz6s",
    authDomain: "invoid-34021.firebaseapp.com",
    projectId: "invoid-34021",
    storageBucket: "invoid-34021.appspot.com",
    messagingSenderId: "433918082040",
    appId: "1:433918082040:web:3e23d23f0710b9bb87340d",
    measurementId: "G-WTG8B43EDV"
  };
  
  const fire =firebase.initializeApp(firebaseConfig);

  firebase.analytics();
  export default fire;