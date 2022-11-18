//YOUR FIREBASE LINKS
         firebase_message_id = childKey;
         message_data = childData;
//Start code
function logout () {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
   window.location = "kwitter.html";
}
//End code
      
getData();
 
function send()
{
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
       name:user_name,
       message:mgs,
       like:0
   });

       document.getElementById("msg").value = "";
}