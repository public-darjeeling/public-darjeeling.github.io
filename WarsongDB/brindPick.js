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
    console.log(ss.val());
    if(parseInt(ss.key) == parseInt(arg.id) || arg.id=="-1"){
        var msg = ss.val();
        key = ss.key;
        state = msg.state;
        id = msg.id;
        console.log(id + " " + state)
        for(var i = 1;i < state.length;i++){
            if(i <= 9)
                $("#hero0" + i).html("<img src=" + state[i] + ">")
            else
                $("#hero" + i).html("<img src=" + state[i] + ">")
        }
    }
});
database.ref("bp/").on('child_changed', function (ss) {
    console.log(ss.val());
    if(parseInt(ss.key) == parseInt(arg.id) || arg.id=="-1"){
        var msg = ss.val();
        key = ss.key;
        state = msg.state;
        id = msg.id;
        console.log(id + " " + state)
        for(var i = 1;i < state.length;i++){
            if(i <= 9)
                $("#hero0" + i).html("<img src=" + state[i] + ">")
            else
                $("#hero" + i).html("<img src=" + state[i] + ">")
        }
    }
});

function check(img){
    console.log(img.src)
    if(arg.team==0){
        if([1,4,6,7,10,11,14].indexOf(state.length) + 1){
            state.push(img.src)
            database.ref("bp/" + parseInt(id)).set({ id: parseInt(id),state: state});
        }
    }else if(arg.team==1){
        if([2,3,5,8,9,12,13].indexOf(state.length) + 1){
            state.push(img.src)
            database.ref("bp/" + parseInt(id)).set({ id: parseInt(id),state: state});
        }
    }
}

function create(){
    database.ref("bp/" + (parseInt(id) + 1)).set({ id: parseInt(id) + 1,state: ["init"]});
    location.assign("http://public-darjeeling.github.io/WarsongDB/brindPick.html?id=" + parseInt(id) + "&team=1");
}
if (arg.id == -1){
    $('#text').html("<button onClick='create()'>New Room</button>");
}else if(arg.team == 1){
    $('#text').html("<h2 style='color:#FF0000'>あなたは赤です</h2><div><a>http://public-darjeeling.github.io/WarsongDB/brindPick.html?id=" + arg.id + "&team=0</a></div><div>このリンクを相手に紹介してください</div>" + 
                    "<div><a>http://public-darjeeling.github.io/WarsongDB/brindPick.html?id=" + arg.id + "&team=-1</a></div><div>このリンクは観戦する人に紹介してください</div>");
}else if(arg.team == 0){
    $("#text").html("<h2 style='color:#0000FF'>あなたは青です</h2><div><a>http://public-darjeeling.github.io/WarsongDB/brindPick.html?id=" + arg.id + "&team=-1</a></div><div>このリンクは観戦する人に紹介してください</div>")
}