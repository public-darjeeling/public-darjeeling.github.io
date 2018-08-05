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
    console.log(ss.key + " " + arg.id);
    if(parseInt(ss.key) == parseInt(arg.id)){
        database.ref("users/" + ss.key).on('child_added', function (child_ss){
            var msg = child_ss.val();
            $('#outId').html(msg.id);
            $('#outName').html(msg.name);
            $('#outTwitter').html(msg.twitter);
            $('#outIntroduction').html(msg.introduction);
        })
    }
});
