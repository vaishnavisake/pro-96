const firebaseConfig = {
      apiKey: "AIzaSyDT873swOOO0ujTGthwdWKAhG-I-ud-ZBE",
      authDomain: "kwitter-bbef2.firebaseapp.com",
      databaseURL: "https://kwitter-bbef2-default-rtdb.firebaseio.com",
      projectId: "kwitter-bbef2",
      storageBucket: "kwitter-bbef2.appspot.com",
      messagingSenderId: "434391046",
      appId: "1:434391046:web:dd655c17156cc8d75adb87"
    };
    
    // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML="welcome"+user_name+"!";
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
       console.log("Room Name -" +Room_names);
       row = "<div class='room_name id="+Room_names+"onclick='redirectToRoomName(this.id)' .#"+Room_names +"</div></hr>";
       document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function addRoom()
{

      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name" , room_name);
      window.location="kwitter_page.html";
}

function redrictToRoomName(name)
{

      console.log(name);
      localStorage.setItem("room_name", name);
       window.location = "kwitter_page.html";
}


function logut()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
         window.location = "index.html";
}

