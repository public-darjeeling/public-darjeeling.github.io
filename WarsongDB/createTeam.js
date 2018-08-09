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
    if($('#inName').val() != ""){
        database.ref("teams/" + $('#inId').val()).set({ id: $('#inId').val(), name: $('#inName').val() , leader: $('#inLeader').val() , introduction: $('#inIntroduction').val()});
        location.href = "selectTeam.html";
    }
    else
        alert("Nameは必須です");
}
