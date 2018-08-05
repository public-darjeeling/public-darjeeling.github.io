var arg = new Object;
var pair=location.search.substring(1).split('&');
for(var i=0;pair[i];i++) {
    var kv = pair[i].split('=');
    arg[kv[0]]=parseFloat(kv[1]);
}
$('#title').html("<span class=\"mainTitle\">-WarsongDB-</span> <span><a class=\"subTitle\" href=\"selectAccount.html\">Home</a></span>");

if(arg.id!=null)
	$('#login').html("<span>ID:" + arg.id + "としてログイン</span>");
else
	$('#login').html("<a href=\"createAccount.html\">Sign up</a>" );

function encryption(pass){
	pass = parseInt(pass);
	pass += 1234;
	pass %= 10000;
	pass *= 100;
	pass += pass / 10000;
	pass %= 10000;
	return parseInt(pass);
}