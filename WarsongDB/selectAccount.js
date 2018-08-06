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

database.ref("users/").on('child_added', function (ss) {
    database.ref("users/" + ss.key).on('child_added', function (child_ss){
        var msg = child_ss.val();
        dspList(msg.id, msg.name, msg.twitter);        
    })
});

function dspList(id,name,twitter,introduction) {
    if(id == "" || name == "" || twitter == "")
        return;
    $('#tableAccount').html($('#tableAccount').html() + "<tr><td>" + id + "</td><td>" + name + "</td><td><a href=\"https://twitter.com/" + twitter + "\">@" + twitter + "</a></td><td><a href=\"profileAccount.html?id=" + id + "\">詳細</td></tr>");
};