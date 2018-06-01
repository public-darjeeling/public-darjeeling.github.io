document.getElementById("states").innerHTML =
"<table border=\"1\">" +
"<tr><td>最大HP</td><td>" + HP + "</td></tr>" +
"<tr><td>最大MP</td><td>" + MP + "</td></tr>" +
"<tr><td>物理攻撃</td><td>" + FAttack + "</td></tr>" +
"<tr><td>物理防御</td><td>" + FDefence + "</td></tr>" +
"<tr><td>魔法攻撃</td><td>" + MAttack + "</td></tr>" +
"<tr><td>魔法防御</td><td>" + MDefence + "</td></tr>" +
"<tr><td>CD短縮</td><td>" + CD + "</td></tr>" +
"<tr><td>CR率</td><td>" + CR + "</td></tr>" +
"</table>"
;
function update(){
	HP = 0;
	MP = 0;
	FAttack = 0;
	FDefence = 0;
	MAttack = 0;
	MDefence = 0;
	CD = 0;
	CR = 0;
	FThrough = 0;
	MThrough = 0;
	Absorption = 0;
	Speed = 0;
	ASpeed = 0;
	Text="";

	if(document.getElementById("button1").innerText == "Release"){
		FAttack += 25;
		ASpeed += 15;
		Speed += 3;
		Text += "<ul>【物理貫通】通常攻撃で目標を命中する時、4秒間、物理貫通＋9％。期間中、再び命中すると効果が累積し、最大5回まで累積可能</ul>";
	}

	document.getElementById("states").innerHTML =
	"<table border=\"1\">" +
	"<tr><td>最大HP</td><td>" + HP + "</td></tr>" +
	"<tr><td>最大MP</td><td>" + MP + "</td></tr>" +
	"<tr><td>物理攻撃</td><td>" + FAttack + "</td></tr>" +
	"<tr><td>物理防御</td><td>" + FDefence + "</td></tr>" +
	"<tr><td>魔法攻撃</td><td>" + MAttack + "</td></tr>" +
	"<tr><td>魔法防御</td><td>" + MDefence + "</td></tr>" +
	"<tr><td>CD短縮</td><td>" + CD + "</td></tr>" +
	"<tr><td>CR率</td><td>" + CR + "</td></tr>" + 
	"</table>" + Text
	;
}

function onClick1(){
	if(document.getElementById("button1").innerText == "Set!"){
		document.getElementById("button1").innerText = "Release";
		document.getElementById("name1").style.color = "#F00000";
	}else{
		document.getElementById("button1").innerText = "Set!";
		document.getElementById("name1").style.color = "#000080";
	}
	update();
}
function onClick2(){
	if(document.getElementById("button2").innerText == "Set!"){
		document.getElementById("button2").innerText = "Release";
		document.getElementById("name2").style.color = "#F00000";
	}else{
		document.getElementById("button2").innerText = "Set!";
		document.getElementById("name2").style.color = "#000080";
	}
	update();
}
function onClick3(){
	if(document.getElementById("button3").innerText == "Set!"){
		document.getElementById("button3").innerText = "Release";
		document.getElementById("name3").style.color = "#F00000";
	}else{
		document.getElementById("button3").innerText = "Set!";
		document.getElementById("name3").style.color = "#000080";
	}
	update();
}
function onClick4(){
	if(document.getElementById("button4").innerText == "Set!"){
		document.getElementById("button4").innerText = "Release";
		document.getElementById("name4").style.color = "#F00000";
	}else{
		document.getElementById("button4").innerText = "Set!";
		document.getElementById("name4").style.color = "#000080";
	}
	update();
}
function onClick5(){
	if(document.getElementById("button5").innerText == "Set!"){
		document.getElementById("button5").innerText = "Release";
		document.getElementById("name5").style.color = "#F00000";
	}else{
		document.getElementById("button5").innerText = "Set!";
		document.getElementById("name5").style.color = "#000080";
	}
	update();
}
function onClick6(){
	if(document.getElementById("button6").innerText == "Set!"){
		document.getElementById("button6").innerText = "Release";
		document.getElementById("name6").style.color = "#F00000";
	}else{
		document.getElementById("button6").innerText = "Set!";
		document.getElementById("name6").style.color = "#000080";
	}
	update();
}
function onClick7(){
	if(document.getElementById("button7").innerText == "Set!"){
		document.getElementById("button7").innerText = "Release";
		document.getElementById("name7").style.color = "#F00000";
	}else{
		document.getElementById("button7").innerText = "Set!";
		document.getElementById("name7").style.color = "#000080";
	}
	update();
}
function onClick8(){
	if(document.getElementById("button8").innerText == "Set!"){
		document.getElementById("button8").innerText = "Release";
		document.getElementById("name8").style.color = "#F00000";
	}else{
		document.getElementById("button8").innerText = "Set!";
		document.getElementById("name8").style.color = "#000080";
	}
	update();
}
function onClick9(){
	if(document.getElementById("button9").innerText == "Set!"){
		document.getElementById("button9").innerText = "Release";
		document.getElementById("name9").style.color = "#F00000";
	}else{
		document.getElementById("button9").innerText = "Set!";
		document.getElementById("name9").style.color = "#000080";
	}
	update();
}
function onClick10(){
	if(document.getElementById("button10").innerText == "Set!"){
		document.getElementById("button10").innerText = "Release";
		document.getElementById("name10").style.color = "#F00000";
	}else{
		document.getElementById("button10").innerText = "Set!";
		document.getElementById("name10").style.color = "#000080";
	}
	update();
}
function onClick11(){
	if(document.getElementById("button11").innerText == "Set!"){
		document.getElementById("button11").innerText = "Release";
		document.getElementById("name11").style.color = "#F00000";
	}else{
		document.getElementById("button11").innerText = "Set!";
		document.getElementById("name11").style.color = "#000080";
	}
	update();
}
function onClick12(){
	if(document.getElementById("button12").innerText == "Set!"){
		document.getElementById("button12").innerText = "Release";
		document.getElementById("name12").style.color = "#F00000";
	}else{
		document.getElementById("button12").innerText = "Set!";
		document.getElementById("name12").style.color = "#000080";
	}
	update();
}
function onClick13(){
	if(document.getElementById("button13").innerText == "Set!"){
		document.getElementById("button13").innerText = "Release";
		document.getElementById("name13").style.color = "#F00000";
	}else{
		document.getElementById("button13").innerText = "Set!";
		document.getElementById("name13").style.color = "#000080";
	}
	update();
}
function onClick14(){
	if(document.getElementById("button14").innerText == "Set!"){
		document.getElementById("button14").innerText = "Release";
		document.getElementById("name14").style.color = "#F00000";
	}else{
		document.getElementById("button14").innerText = "Set!";
		document.getElementById("name14").style.color = "#000080";
	}
	update();
}