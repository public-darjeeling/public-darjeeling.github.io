var HP = 0;
var MP = 0;
var FAttack = 0;
var FDefence = 0;
var MAttack = 0;
var MDefence = 0;
var CD = 0;
var CR = 0;
var FThrough = 0;
var MThrough = 0;
var FAbsorption = 0;
var MAbsorption = 0;
var HPRecovery = 0;
var MPRecovery = 0;
var Speed = 0;
var ASpeed = 0;
var Money = 0;
var Text="";

function init(){
	document.getElementById("states").innerHTML =
	"<table border=\"1\">" +
	"<tr><td>物理攻撃</td><td>" + FAttack + "</td>" + "<td>魔法攻撃</td><td>" + MAttack + "</td></tr>" + 
	"<tr><td>物理防御</td><td>" + FDefence + "</td>" + "<td>魔法防御</td><td>" + MDefence + "</td></tr>" + 
	"<tr><td>最大HP</td><td>" + HP + "</td>" + "<td>最大MP</td><td>" + MP + "</td></tr>" + 
	"<tr><td>攻撃速度</td><td>" + ASpeed + "</td>" + "<td>CD短縮</td><td>" + CD + "</td></tr>" + 
	"<tr><td>CR率</td><td>" + CR + "</td>" + "<td>移動速度</td><td>" + Speed + "</td></tr>" + 
	"<tr><td>HP回復</td><td>" + HPRecovery + "</td>" + "<td>MP回復</td><td>" + MPRecovery + "</td></tr>" + 
	"<tr><td>物理貫通</td><td>" + FThrough + "</td>" + "<td>魔法貫通</td><td>" + FThrough + "</td></tr>" + 
	"<tr><td>HP吸収/物理</td><td>" + FAbsorption + "</td>" + "<td>HP吸収/魔法</td><td>" + FAbsorption + "</td></tr>" + 
	"<tr><td>合計金額</td><td>" + Money + "</td></tr>" + 
	"</table>" + Text
	;
}

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
	FAbsorption = 0;
	MAbsorption = 0;
	Speed = 0;
	ASpeed = 0;
	Money = 0;
	Text="";

	if(document.getElementById("button1").innerText == "Release"){
		Money += 2400;
		FAttack += 25;
		ASpeed += 15;
		Speed += 3;
		Text += "<ul>【物理貫通】通常攻撃で目標を命中する時、4秒間、物理貫通＋9％。期間中、再び命中すると効果が累積し、最大5回まで累積可能</ul>";
	}
	if(document.getElementById("button2").innerText == "Release"){
		Money += 2400;
		FAttack += 50;
		Text += "<ul>【血染め】+10%HP吸収/物理</ul>";
		Text += "<ul>【メイム】通常攻撃で目標を命中する時、3秒間相手のHP回復効果-50%</ul>";
	}
	if(document.getElementById("button3").innerText == "Release"){
		Money += 2400;
		FAttack += 50;
		Text += "<ul>【血染め】+25%HP吸収/物理</ul>";
	}
	if(document.getElementById("button4").innerText == "Release"){
		Money += 2400;
		FAttack += 35;
		CR += 20;
		Text += "<ul>【レジサイド】CRダメージ+30%</ul>";
	}
	if(document.getElementById("button5").innerText == "Release"){
		Money += 2400;
		FAttack += 60;
		Speed += 3;
		Text += "<ul>【ライトニング】通常攻撃時、稲妻の連鎖を放ってターゲットに魔法ダメージ100を与える。CD4秒</ul>";
	}
	if(document.getElementById("button6").innerText == "Release"){
		Money += 2400;
		ASpeed += 20;
		CR += 15;
		Text += "<ul>【ヘイスト】CR発生時に、2秒間自身の移動速度+20%</ul>";
	}
	if(document.getElementById("button7").innerText == "Release"){
		Money += 2400;
		ASpeed += 30;
		CR += 15;
		Text += "<ul>【ハリケーン】2秒間通常攻撃するたび自身の物理攻撃+5。最大10回累積可能</ul>";
	}
	if(document.getElementById("button8").innerText == "Release"){
		Money += 2200;
		FAttack += 40;
		Text += "<ul>【ジャギーエッジ】物理貫通+25%</ul>";
	}
	if(document.getElementById("button9").innerText == "Release"){
		Money += 2200;
		ASpeed += 20;
		Text += "<ul>【血染め】HP吸収/物理+15％</ul>";
		Text += "<ul>【リーチ】通常攻撃するたび、ターゲットの現在HPの6％分の物理ダメージを追加</ul>";
	}
	if(document.getElementById("button10").innerText == "Release"){
		Money += 2200;
		FAttack += 20;
		CD += 15;
		Speed += 3;
		Text += "<ul>【ルーンパワー】スキル使用後、次の通常攻撃時に追加物理ダメージを与える</ul>";
		Text += "<ul>【追撃】通常攻撃時、自身の移動速度+10％</ul>"
	}
	if(document.getElementById("button11").innerText == "Release"){
		Money += 2200;
		FAttack += 30;
		FDefence += 10;
		CD += 10;
		Text += "<ul>【物理防御低下】物理ダメージを与えるたび、相手の物理防御-6％。最大5回まで累積可能</ul>";
	}
	if(document.getElementById("button12").innerText == "Release"){
		Money += 2000;
		FAttack += 30;
		Speed += 10;
		Text += "<ul>【ディサピア】戦闘離脱後、移動速度+40</ul>";
		Text += "<ul>【物理貫通】+10</ul>";
	}
	if(document.getElementById("button13").innerText == "Release"){
		Money += 2000;
		HP += 500;
		FDefence += 15;
		Text += "<ul>【フリジッド】通常攻撃時、ターゲットの移動速度-40％</ul>";
	}
	if(document.getElementById("button14").innerText == "Release"){
		Money += 2000;
		FAttack += 40;
		Speed += 5;
		Text += "<ul>【アサシン】敵の視界で隠れ身状態になると、次の通常攻撃時に物理ダメージがアップ。CD1秒</ul>";
		Text += "<ul>【ホームスラスト】レベル×1の物理貫通を獲得</ul>";
	}
	if(document.getElementById("button100").innerText == "Release"){
		Money += 800;
		HP += 80;
		Text += "<ul>【騎士】物理防御+10</ul>";
		Text += "<ul>【靴】移動速度+45</ul>";
	}
	if(document.getElementById("button101").innerText == "Release"){
		Money += 800;
		HP += 80;
		Text += "<ul>【ブーツ】魔法防御+20</ul>";
		Text += "<ul>【靴】移動速度+45</ul>";
	}
	if(document.getElementById("button102").innerText == "Release"){
		Money += 800;
		MAttack += 25;
		Text += "<ul>【エレメントブーツ】CD短縮+10％</ul>";
		Text += "<ul>【靴】移動速度+45</ul>";
	}
	if(document.getElementById("button103").innerText == "Release"){
		Money += 800;
		FAttack += 5;
		Text += "<ul>【ファイトスピリット】攻撃速度+8</ul>";
		Text += "<ul>【靴】移動速度+45</ul>";
	}
	if(document.getElementById("button104").innerText == "Release"){
		Money += 750;
		Text += "<ul>【パイオニア】戦闘離脱後、移動速度+45、1秒ごとに40HPを回復する</ul>";
		Text += "<ul>【靴】移動速度+45</ul>";
	}

	document.getElementById("states").innerHTML =
	"<table border=\"1\">" +
	"<tr><td>物理攻撃</td><td>" + FAttack + "</td>" + "<td>魔法攻撃</td><td>" + MAttack + "</td></tr>" + 
	"<tr><td>物理防御</td><td>" + FDefence + "</td>" + "<td>魔法防御</td><td>" + MDefence + "</td></tr>" + 
	"<tr><td>最大HP</td><td>" + HP + "</td>" + "<td>最大MP</td><td>" + MP + "</td></tr>" + 
	"<tr><td>攻撃速度</td><td>" + ASpeed + "</td>" + "<td>CD短縮</td><td>" + CD + "</td></tr>" + 
	"<tr><td>CR率</td><td>" + CR + "</td>" + "<td>移動速度</td><td>" + Speed + "</td></tr>" + 
	"<tr><td>HP回復</td><td>" + HPRecovery + "</td>" + "<td>MP回復</td><td>" + MPRecovery + "</td></tr>" + 
	"<tr><td>物理貫通</td><td>" + FThrough + "</td>" + "<td>魔法貫通</td><td>" + FThrough + "</td></tr>" + 
	"<tr><td>HP吸収/物理</td><td>" + FAbsorption + "</td>" + "<td>HP吸収/魔法</td><td>" + FAbsorption + "</td></tr>" + 
	"<tr><td>合計金額</td><td>" + Money + "</td></tr>" + 
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
function onClick100(){
	if(document.getElementById("button100").innerText == "Set!"){
		document.getElementById("button100").innerText = "Release";
		document.getElementById("name100").style.color = "#F00000";
	}else{
		document.getElementById("button100").innerText = "Set!";
		document.getElementById("name100").style.color = "#000080";
	}
	update();
}
function onClick101(){
	if(document.getElementById("button101").innerText == "Set!"){
		document.getElementById("button101").innerText = "Release";
		document.getElementById("name101").style.color = "#F00000";
	}else{
		document.getElementById("button101").innerText = "Set!";
		document.getElementById("name101").style.color = "#000080";
	}
	update();
}
function onClick102(){
	if(document.getElementById("button102").innerText == "Set!"){
		document.getElementById("button102").innerText = "Release";
		document.getElementById("name102").style.color = "#F00000";
	}else{
		document.getElementById("button102").innerText = "Set!";
		document.getElementById("name102").style.color = "#000080";
	}
	update();
}
function onClick103(){
	if(document.getElementById("button103").innerText == "Set!"){
		document.getElementById("button103").innerText = "Release";
		document.getElementById("name103").style.color = "#F00000";
	}else{
		document.getElementById("button103").innerText = "Set!";
		document.getElementById("name103").style.color = "#000080";
	}
	update();
}
function onClick104(){
	if(document.getElementById("button104").innerText == "Set!"){
		document.getElementById("button104").innerText = "Release";
		document.getElementById("name104").style.color = "#F00000";
	}else{
		document.getElementById("button104").innerText = "Set!";
		document.getElementById("name104").style.color = "#000080";
	}
	update();
}