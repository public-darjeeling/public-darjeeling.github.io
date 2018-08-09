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
    if(parseInt(ss.key) == parseInt(arg.id)){
        var msg = ss.val();
        $('#outId').html(msg.id);
        $('#outName').html(msg.name);
        if(msg.rank=="None")
            $('#outRank').html("<span style=\"color:#000000\">None</span>");
        if(msg.rank=="Pawn")
            $('#outRank').html("<span style=\"color:#00a968\">Pawn</span>");
        if(msg.rank=="Luke")
            $('#outRank').html("<span style=\"color:#0068b7\">Luke</span>");
        if(msg.rank=="Knight")
            $('#outRank').html("<span style=\"color:#740084\">Knight</span>");
        if(msg.rank=="Bishop")
            $('#outRank').html("<span style=\"color:#942343\">Bishop</span>");
        if(msg.rank=="King")
            $('#outRank').html("<span style=\"color:#FF0000\">King</span>");
        $('#outTwitter').html("<a href=\"https://twitter.com/" + msg.twitter + "\">@" + msg.twitter + "</a>");
        $('#outPrefecture').html(msg.prefecture);
        $('#outIntroduction').html(msg.introduction);
    }
});

$('#change').html("<a href=\"updateAccount.html?id=" + arg.id + "\"><button>変更・削除</button></a>");
