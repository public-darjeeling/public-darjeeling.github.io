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
console.log("test");
database.ref("teams/").on('child_added', function (ss) {

    console.log(ss.key)
    database.ref("teams/" + ss.key).on('child_added', function (child_ss){
        var msg = child_ss.val();
        dspList(msg.id, msg.name, msg.leader);        
    })
});


function dspList(id,name,leader) {
    console.log(id+name+leader)
    if(id == "" || name == "" || leader == "")
        return;
    $('#tableTeam').html($('#tableTeam').html() + "<tr><td>" + name + "</td><td><a href=\"profileAccount.html?id=" + leader + "\">" + leader + "</a></td><td><a href=\"profileTeam.html?id=" + id + "\">詳細</td></tr>");
};