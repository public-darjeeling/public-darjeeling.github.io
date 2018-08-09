var config = {
    apiKey: "AIzaSyBezeIYZOGKf436pBjfw7bY9pKYLMAp6R4",
    authDomain: "mobadb-32a67.firebaseapp.com",
    databaseURL: "https://mobadb-32a67.firebaseio.com",
    projectId: "mobadb-32a67",
    storageBucket: "mobadb-32a67.appspot.com",
    messagingSenderId: "258662919178"
};
firebase.initializeApp(config);
var database = firebase.database();

function onEnter(){
     if($('#inId').val() != "" && $('#inName').val() != "" && $('#inPassword').val() != ""){
        try{
            database.ref("users/" + $('#inId').val()).set({ id: $('#inId').val(), name: $('#inName').val() , twitter: $('#inTwitter').val() , introduction: $('#inIntroduction').val() , password: encryption($('#inPassword').val())});
            location.href = "selectAccount.html";
        }catch(e){
            alert(e);
        }
    }
    else
        alert("Id・Name・Passwordは必須です");
}
