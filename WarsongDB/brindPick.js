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
        id = msg.id;
    }
});

function check(link){
    console.log(String(link))
    if(arg.team=="blue"){
        if([1,4,5,8,9,12,13].indexOf(state.length)){
            state.append(link)
            database.ref("bp/" + parseInt(id)).set({ id: parseInt(id),state: state});
        }
    }else if(arg.team=="red"){
        if([2,3,6,7,10,11,14].indexOf(state.length)){
            state.append(link)
            database.ref("bp/" + parseInt(id)).set({ id: parseInt(id),state: state});
        }
    }
}

function create(){
    console.log(id + " " + state);
    database.ref("bp/" + (parseInt(id) + 1)).set({ id: parseInt(id) + 1,state: ['']});
    location.assign("http://public-darjeeling.github.io/WarsongDB/brindPick.html?id=" + parseInt(id) + "&team=red");
}

if (parseInt(arg.id) == -1){
    $('#text').html("<button onClick='create()'>New Room</button>");
}else if(arg.team == "red"){
    $('#text').html("<div><a>http://public-darjeeling.github.io/WarsongDB/brindPick.html?id=" + arg.id + "&team=blue<a></div><div>このリンクを相手に紹介してください</div>");
}