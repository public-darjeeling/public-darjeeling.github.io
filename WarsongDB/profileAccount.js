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
    console.log(ss.key + " " + ss.val());
    if(parseInt(ss.key) == parseInt(arg.id)){
        var msg = ss.val();
        $('#outId').html(msg.id);
        $('#outName').html(msg.name);
        $('#outTwitter').html("<a href=\"https://twitter.com/" + msg.twitter + "\">@" + msg.twitter + "</a>");
        $('#outIntroduction').html(msg.introduction);
    }
});

$('#change').html("<a href=\"updateAccount.html?id=" + arg.id + "\"><button>変更・削除</button></a>");
