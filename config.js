import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyBHcleF1UxQ_2eR5yOoh6zpFH2ymYvZzPg",
  authDomain: "book-santa-51c46.firebaseapp.com",
  databaseURL: "https://book-santa-51c46-default-rtdb.firebaseio.com",
  projectId: "book-santa-51c46",
  storageBucket: "book-santa-51c46.appspot.com",
  messagingSenderId: "501958923935",
  appId: "1:501958923935:web:a9262e8e61fb2e0a8934aa"
};
  //Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  // var firebaseConfig = {
  //   apiKey: "AIzaSyA79anLlMW92TBZYxKDoJhghGTXT7RPkwo",
  //   authDomain: "book-santa-55d04.firebaseapp.com",
  //   projectId: "book-santa-55d04",
  //   storageBucket: "book-santa-55d04.appspot.com",
  //   messagingSenderId: "908302517758",
  //   appId: "1:908302517758:web:c77253b5dc089039a62caf"
  // };
  // // Initialize Firebase
  // firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();