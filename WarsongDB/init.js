var arg = new Object;
var pair=location.search.substring(1).split('&');
for(var i=0;pair[i];i++) {
    var kv = pair[i].split('=');
    arg[kv[0]]=parseFloat(kv[1]);
}
if(window.parent.screen.width > 499){
	$('#title').html(	"<span class=\"headerWrapper\"><span class=\"mainTitle\" style=\"padding-right: 20px;\">-WarsongDB-</span>" + 
					 	"<span><a class=\"subTitle\" href=\"selectAccount.html\">Users</a></span>" + 
					 	"<span><a class=\"subTitle\" href=\"selectTeam.html\">Teams</a></span>" + 
					 	"<span><a class=\"subTitle\" href=\"readMe.html\">Read Me !!</a></span>" + 
					 	"</span>");
}else{
	$('#title').html(	"<span class=\"headerWrapper\"><span class=\"mainTitle\" style=\"padding-right: 20px;\">-WarsongDB-</span><br>" + 
					 	"<span><a class=\"subTitle\" href=\"selectAccount.html\">Users</a></span>" + 
					 	"<span><a class=\"subTitle\" href=\"selectTeam.html\">Teams</a></span>" + 
					 	"<span><a class=\"subTitle\" href=\"readMe.html\">Read Me !!</a></span>" + 
					 	"</span>");
}

function encryption(pass){
	pass = parseInt(pass);
	pass += 1234;
	pass %= 10000;
	pass *= 100;
	pass += pass / 10000;
	pass %= 10000;
	return parseInt(pass);
}