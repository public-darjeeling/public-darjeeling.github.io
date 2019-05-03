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

var id = 0,message = 0;
var key,state = null;

database.ref("bp/").on('child_added', function (ss) {
    console.log(ss + " " + arg.id);
    if(parseInt(ss.key) == parseInt(arg.id) || arg.id=="-1"){
        var msg = ss.val();
        key = ss.key;
        state = msg.state;
    }
});

function check(link){
    console.log(String(link))
}

function create(){
    database.ref("bp/" + (parseInt(arg.id) + 1)).set({ id: parseInt(arg.id) + 1,state: new Array()});
    location.assign("http://public-darjeeling.github.io/WarsongDB/brindPick?id=" + (parseInt(arg.id) + 1) + "&team=red");
}

if (parseInt(arg.id) == -1){
    $('#text').html("<button onClick='create()'>New Room</button>");
}else{
    $('#text').html("<div>http://public-darjeeling.github.io/WarsongDB/brindPick?id=" + arg.id + "&team=blue</div> このリンクを相手に紹介してください");
}