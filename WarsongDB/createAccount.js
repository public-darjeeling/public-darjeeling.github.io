var config = {
    apiKey: "AIzaSyBezeIYZOGKf436pBjfw7bY9pKYLMAp6R4",
    authDomain: "mobadb-32a67.firebaseapp.com",
    databaseURL: "https://mobadb-32a67.firebaseio.com",
    projectId: "mobadb-32a67",
    storageBucket: "mobadb-32a67.appspot.com",
    messagingSenderId: "258662919178"
};
firebase.initializeApp(config);

var rootRef = firebase.database().ref();

function onEnter(){
    rootRef.push({ id: $('#inId').val(), name: $('#inName').val() , twitter: $('#inTwitter').val() , introduction: $('#inIntroduction').val()});
}

rootRef.on('child_added', function (ss) {
    var msg = ss.val();
    dspChatMsg(msg.id, msg.name,msg.twitter,msg.introduction);
});

function dspChatMsg(id,name,twitter,introduction) {
    console.log(id + " " + name +" " + " @" + twitter + " " + introduction);
};