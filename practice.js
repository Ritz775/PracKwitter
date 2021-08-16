// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAeDuCCj3v3Yh75BF87dpW9We2YTxYmEXA",
  authDomain: "kwitter-23a0b.firebaseapp.com",
  databaseURL: "https://kwitter-23a0b-default-rtdb.firebaseio.com",
  projectId: "kwitter-23a0b",
  storageBucket: "kwitter-23a0b.appspot.com",
  messagingSenderId: "338494721100",
  appId: "1:338494721100:web:a34669d7fc92d91b20b8e9",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function add_user() {
  user_name = document.getElementById("user_name").value;
  firebase.database().ref("/").child(user_name).update({
    purpose: "adding_user",
  });
}
