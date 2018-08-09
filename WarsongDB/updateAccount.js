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

var id
var password

database.ref("users/").on('child_added', function (ss) {
    console.log(ss + " " + arg.id);
    if(parseInt(ss.key) == parseInt(arg.id)){
        var msg = ss.val();
        $('#inId').val(msg.id);
        $('#inName').val(msg.name);
        $('#inTwitter').val(msg.twitter);
        $('#inIntroduction').val(msg.introduction);
        $('#inRank').val(msg.rank);
        $('#inPrefecture').val(msg.prefecture)
        id = msg.id;
        password = msg.password
    }
});

$('#change').html("<a href=\"updateAccount.html?id=" + arg.id + "\"><button>変更・削除</button></a>");

function onUpdate(){
    if($('#inId').val() == "" && $('#inName').val() == "" && $('#inPassword').val() == ""){
        alert("Id・Name・Passwordは必須です");
    }else if(encryption($('#checkPassword').val()) != password){
        alert("パスワードが違います");
    }else{
        try{
            database.ref("users/" + id).set({ id: id, 
                                                            name: $('#inName').val() , 
                                                            twitter: $('#inTwitter').val() , 
                                                            introduction: $('#inIntroduction').val() , 
                                                            password: encryption($('#checkPassword').val()) ,
                                                            rank: $('#inRank').val() ,
                                                            prefecture: $('#inPrefecture').val()});
            location.href = "selectAccount.html";
        }catch(e){
            alert(e);
        }
    }
}