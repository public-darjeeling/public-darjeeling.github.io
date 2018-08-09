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
    var msg = ss.val();
    dspList(msg.id, msg.name, msg.twitter, msg.rank);        
});

function dspList(id,name,twitter,rank) {
    if(id == "" || name == "" || twitter == "")
        return;
    if(rank=="None")
        name = "<span style=\"color:#000000\">" + name + "</span>";
    if(rank=="Pawn")
        name = "<span style=\"color:#00a968\">" + name + "</span>";
    if(rank=="Luke")
        name = "<span style=\"color:#0068b7\">" + name + "</span>";
    if(rank=="Knight")
        name = "<span style=\"color:#740084\">" + name + "</span>";
    if(rank=="Bishop")
        name = "<span style=\"color:#942343\">" + name + "</span>";
    if(rank=="King")
        name = "<span style=\"color:#FF0000\">" + name + "</span>";
        
    $('#tableAccount').html($('#tableAccount').html() + "<tr><td>" + id + "</td><td>" + name + "</td><td><a href=\"https://twitter.com/" + twitter + "\">@" + twitter + "</a></td><td><a href=\"profileAccount.html?id=" + id + "\">詳細</td></tr>");
};