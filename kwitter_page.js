const firebaseConfig = {
    apiKey: "AIzaSyDCqgJLnk5zmvbZvnGooewnZvo_mJhz3yA",
    authDomain: "kwitter-6493f.firebaseapp.com",
    projectId: "kwitter-6493f",
    storageBucket: "kwitter-6493f.appspot.com",
    messagingSenderId: "300062168743",
    appId: "1:300062168743:web:fa3b83dde1cdc90fda6d82"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();

function logut()
{
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
       window.location = "index.html";
}
function send()
{
    msg=document.getElementById("msg").value;
   // firebase.database().ref(room_name).push({
       //   name:user_name,
       //   massage:msg,
       //   like:0
   // });

    document.getElementById("msg").value = "";
}