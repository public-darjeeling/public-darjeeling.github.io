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
	if(document.getElementById("button30").innerText == "Release"){
		Money += 2300;
		MP += 200;
		CD += 20;
		Text += "<ul>【コールド】敵に5回通常攻撃されると、800範囲内の敵の攻撃速度と移動速度を-30%</ul>";
	}
	if(document.getElementById("button31").innerText == "Release"){
		Money += 2000;
		FDefence += 10;
		HP += 200;
		CD += 20;
		Text += "<ul>【ルーンパワー】スキル使用後、次の通常攻撃が範囲減速になり、物理ダメージを追加。CD4秒</ul>";
	}
	if(document.getElementById("button32").innerText == "Release"){
		Money += 2400;
		FDefence += 20;
		MDefence += 20;
		CD += 10;
		Text += "<ul>【サバイブ】自身から600範囲内の敵ヒーロー1体につき、自身の物理防御と魔法防御を+4、レジスト率を+6%。5回まで累積</ul>";
	}
	if(document.getElementById("button33").innerText == "Release"){
		Money += 2200;
		FDefence += 25;
		CD += 10;
		Text += "<ul>【ヘッジホッグ】受けた物理ダメージの25%を、魔法ダメージとして攻撃者へ反射(ダメージ算出前)</ul>";
	}
	if(document.getElementById("button34").innerText == "Release"){
		Money += 2200;
		HP += 600;
		Text += "<ul>5秒ごとにHP30回復</ul>";
		Text += "<ul>【リカバリ】戦闘離脱後、最大HPの5％分を毎秒回復</ul>";
	}
	if(document.getElementById("button35").innerText == "Release"){
		Money += 2200;
		HP += 200;
		FDefence += 20;
		Text += "<ul>【アイアンクラッド】攻撃される時、相手の攻撃速度-15%、移動速度-15%</ul>";
	}
	if(document.getElementById("button36").innerText == "Release"){
		Money += 2200;
		HP += 500;
		MDefence += 25;
		Text += "<ul>【リニュー】受けた治療効果+20%</ul>";
	}
	if(document.getElementById("button37").innerText == "Release"){
		Money += 2200;
		HP += 300;
		MDefence += 45;
		Text += "<ul>【アダプト】魔法ダメージを吸収するバリアを40秒ごとに獲得</ul>";
	}
	if(document.getElementById("button38").innerText == "Release"){
		Money += 2000;
		HP += 400;
		Text += "<ul>5秒ごとにHP20回復</ul>"
		Text += "<ul>【エイド】800範囲内の味方の物理防御と魔法防御+10</ul>";
	}
	if(document.getElementById("button39").innerText == "Release"){
		Money += 2000;
		HP += 300;
		FDefence += 15;
		Text += "<ul>【ブレイズ】周囲の敵に毎秒15~43の魔法ダメージを与える</ul>";
	}
	if(document.getElementById("button40").innerText == "Release"){
		Money += 1800;
		HP += 500;
		Text += "<ul>【底力】HP30％未満時に底力を発揮し、物理攻撃+25、かつ強力なバリアを獲得。８秒間持続</ul>";
	}
	if(document.getElementById("button60").innerText == "Release"){
		Money += 2000;
		MAttack += 50;
		HP += 150;
		CD += 10;
		Text += "<ul>【生贄】魔法ダメージの25％のHPを回復する</ul>";
	}
	if(document.getElementById("button61").innerText == "Release"){
		Money += 2000;
		HP += 300;
		CD += 10;
		Text += "<ul>【カタリシス】スキルで魔法ダメージを与えると、自身のHPを最大HPの10％分回復する。CD6秒</ul>";
	}
	if(document.getElementById("button62").innerText == "Release"){
		Money += 2400;
		MAttack += 80
		Text += "<ul>【アンプリファイ】魔法攻撃+25％</ul>";
	}
	if(document.getElementById("button63").innerText == "Release"){
		Money += 2400;
		MAttack += 50;
		ASpeed += 30;
		Text += "<ul>【アルカニスト】通常攻撃3回ごとに魔法攻撃の70％分の魔法ダメージを追加</ul>";
	}
	if(document.getElementById("button64").innerText == "Release"){
		Money += 2200;
		MAttack += 30;
		HP += 400;
		Text += "<ul>【ミザリー】周囲800範囲にいる敵の魔法防御-15％</ul>";
	}
	if(document.getElementById("button65").innerText == "Release"){
		Money += 2200;
		MAttack += 40;
		HP += 300;
		CD += 10;
		Text += "<ul>【ルーンパワー】スキル使用後、次の通常攻撃に魔法ダメージを追加</ul>";
	}
	if(document.getElementById("button66").innerText == "Release"){
		Money += 2200;
		MAttack += 50;
		MP += 200;
		CD += 10;
		Text += "<ul>5秒ごとにＭＰを20回復</ul>";
		Text += "<ul>【魔力の源】戦闘離脱後ＭＰを回復する</ul>";
	}
	if(document.getElementById("button67").innerText == "Release"){
		Money += 2200;
		MAttack += 80;
		MThrough += 5;
		Text += "<ul>【サンダーボルト】スキルに稲妻を付加し、ターゲットとその周囲の敵に50+10%の魔法ダメージを与える。</ul>";
	}
	if(document.getElementById("button68").innerText == "Release"){
		Money += 2200;
		MAttack += 40;
		HP += 300;
		CD += 10;
		Text += "<ul>【カース】魔法ダメージを与え、ターゲットとその周囲の敵4体にカース効果を付加して、現在ＨＰの5％の魔法ダメージを持続的に与える</ul>";
	}
	if(document.getElementById("button69").innerText == "Release"){
		Money += 2200;
		MAttack += 40;
		FDefence += 10;
		MDefence += 10;
		Text += "<ul>【マジックバリア】HP30%未満時にバリアを獲得。吸収するダメージはレベル成長と魔法攻撃ボーナスによって異なる</ul>";
	}
	if(document.getElementById("button70").innerText == "Release"){
		Money += 2000;
		MAttack += 60;
		Text += "<ul>【ルイン】魔法貫通+30％</ul>";
	}
	if(document.getElementById("button71").innerText == "Release"){
		Money += 1800;
		MAttack += 50;
		MP += 300;
		CD += 10;
		Text += "<ul>【フリジッド】スキルでダメージを与えた敵の移動速度-20％</ul>";
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
	if(document.getElementById("button120").innerText == "Release"){
		Money += 1600;
		MAttack += 25;
		MP += 300;
		Text += "<ul>【狩猟】モンスターへのダメージ30％アップ、モンスターを倒すとき経験値30％アップ</ul>";
		Text += "<ul>【上達の狩人】モンスターを倒すとき魔法攻撃1アップ、最大15スタックまで</ul>";
	}
	if(document.getElementById("button121").innerText == "Release"){
		Money += 1600;
		HP += 300;
		Text += "<ul>【狩猟】モンスターへのダメージ30％アップ、モンスターを倒すとき経験値30％アップ</ul>";
		Text += "<ul>【上達の狩人】モンスターを倒すとき最大HP+10、最大15スタックまで</ul>";
		Text += "<ul>【紅蓮】周りの敵に1秒毎、15~43の魔法ダメージを与える</ul>";
	}
	if(document.getElementById("button122").innerText == "Release"){
		Money += 1600;
		FAttack += 20;
		ASpeed += 5;
		Text += "<ul>【狩猟】モンスターへのダメージ30％アップ、モンスターを倒すとき経験値30％アップ</ul>";
		Text += "<ul>【上達の狩人】モンスターを倒すとき攻撃+1%、最大15スタックまで</ul>";
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
function onClick30(){
	if(document.getElementById("button30").innerText == "Set!"){
		document.getElementById("button30").innerText = "Release";
		document.getElementById("name30").style.color = "#F00000";
	}else{
		document.getElementById("button30").innerText = "Set!";
		document.getElementById("name30").style.color = "#000080";
	}
	update();
}
function onClick31(){
	if(document.getElementById("button31").innerText == "Set!"){
		document.getElementById("button31").innerText = "Release";
		document.getElementById("name31").style.color = "#F00000";
	}else{
		document.getElementById("button31").innerText = "Set!";
		document.getElementById("name31").style.color = "#000080";
	}
	update();
}
function onClick32(){
	if(document.getElementById("button32").innerText == "Set!"){
		document.getElementById("button32").innerText = "Release";
		document.getElementById("name32").style.color = "#F00000";
	}else{
		document.getElementById("button32").innerText = "Set!";
		document.getElementById("name32").style.color = "#000080";
	}
	update();
}
function onClick33(){
	if(document.getElementById("button33").innerText == "Set!"){
		document.getElementById("button33").innerText = "Release";
		document.getElementById("name33").style.color = "#F00000";
	}else{
		document.getElementById("button33").innerText = "Set!";
		document.getElementById("name33").style.color = "#000080";
	}
	update();
}
function onClick34(){
	if(document.getElementById("button34").innerText == "Set!"){
		document.getElementById("button34").innerText = "Release";
		document.getElementById("name34").style.color = "#F00000";
	}else{
		document.getElementById("button34").innerText = "Set!";
		document.getElementById("name34").style.color = "#000080";
	}
	update();
}
function onClick35(){
	if(document.getElementById("button35").innerText == "Set!"){
		document.getElementById("button35").innerText = "Release";
		document.getElementById("name35").style.color = "#F00000";
	}else{
		document.getElementById("button35").innerText = "Set!";
		document.getElementById("name35").style.color = "#000080";
	}
	update();
}
function onClick36(){
	if(document.getElementById("button36").innerText == "Set!"){
		document.getElementById("button36").innerText = "Release";
		document.getElementById("name36").style.color = "#F00000";
	}else{
		document.getElementById("button36").innerText = "Set!";
		document.getElementById("name36").style.color = "#000080";
	}
	update();
}
function onClick37(){
	if(document.getElementById("button37").innerText == "Set!"){
		document.getElementById("button37").innerText = "Release";
		document.getElementById("name37").style.color = "#F00000";
	}else{
		document.getElementById("button37").innerText = "Set!";
		document.getElementById("name37").style.color = "#000080";
	}
	update();
}
function onClick38(){
	if(document.getElementById("button38").innerText == "Set!"){
		document.getElementById("button38").innerText = "Release";
		document.getElementById("name38").style.color = "#F00000";
	}else{
		document.getElementById("button38").innerText = "Set!";
		document.getElementById("name38").style.color = "#000080";
	}
	update();
}
function onClick39(){
	if(document.getElementById("button39").innerText == "Set!"){
		document.getElementById("button39").innerText = "Release";
		document.getElementById("name39").style.color = "#F00000";
	}else{
		document.getElementById("button39").innerText = "Set!";
		document.getElementById("name39").style.color = "#000080";
	}
	update();
}
function onClick40(){
	if(document.getElementById("button40").innerText == "Set!"){
		document.getElementById("button40").innerText = "Release";
		document.getElementById("name40").style.color = "#F00000";
	}else{
		document.getElementById("button40").innerText = "Set!";
		document.getElementById("name40").style.color = "#000080";
	}
	update();
}
function onClick60(){
	if(document.getElementById("button60").innerText == "Set!"){
		document.getElementById("button60").innerText = "Release";
		document.getElementById("name60").style.color = "#F00000";
	}else{
		document.getElementById("button60").innerText = "Set!";
		document.getElementById("name60").style.color = "#000080";
	}
	update();
}
function onClick61(){
	if(document.getElementById("button61").innerText == "Set!"){
		document.getElementById("button61").innerText = "Release";
		document.getElementById("name61").style.color = "#F00000";
	}else{
		document.getElementById("button61").innerText = "Set!";
		document.getElementById("name61").style.color = "#000080";
	}
	update();
}
function onClick62(){
	if(document.getElementById("button62").innerText == "Set!"){
		document.getElementById("button62").innerText = "Release";
		document.getElementById("name62").style.color = "#F00000";
	}else{
		document.getElementById("button62").innerText = "Set!";
		document.getElementById("name62").style.color = "#000080";
	}
	update();
}
function onClick63(){
	if(document.getElementById("button63").innerText == "Set!"){
		document.getElementById("button63").innerText = "Release";
		document.getElementById("name63").style.color = "#F00000";
	}else{
		document.getElementById("button63").innerText = "Set!";
		document.getElementById("name63").style.color = "#000080";
	}
	update();
}
function onClick64(){
	if(document.getElementById("button64").innerText == "Set!"){
		document.getElementById("button64").innerText = "Release";
		document.getElementById("name64").style.color = "#F00000";
	}else{
		document.getElementById("button64").innerText = "Set!";
		document.getElementById("name64").style.color = "#000080";
	}
	update();
}
function onClick65(){
	if(document.getElementById("button65").innerText == "Set!"){
		document.getElementById("button65").innerText = "Release";
		document.getElementById("name65").style.color = "#F00000";
	}else{
		document.getElementById("button65").innerText = "Set!";
		document.getElementById("name65").style.color = "#000080";
	}
	update();
}
function onClick66(){
	if(document.getElementById("button66").innerText == "Set!"){
		document.getElementById("button66").innerText = "Release";
		document.getElementById("name66").style.color = "#F00000";
	}else{
		document.getElementById("button66").innerText = "Set!";
		document.getElementById("name66").style.color = "#000080";
	}
	update();
}
function onClick67(){
	if(document.getElementById("button67").innerText == "Set!"){
		document.getElementById("button67").innerText = "Release";
		document.getElementById("name67").style.color = "#F00000";
	}else{
		document.getElementById("button67").innerText = "Set!";
		document.getElementById("name67").style.color = "#000080";
	}
	update();
}
function onClick68(){
	if(document.getElementById("button68").innerText == "Set!"){
		document.getElementById("button68").innerText = "Release";
		document.getElementById("name68").style.color = "#F00000";
	}else{
		document.getElementById("button68").innerText = "Set!";
		document.getElementById("name68").style.color = "#000080";
	}
	update();
}
function onClick69(){
	if(document.getElementById("button69").innerText == "Set!"){
		document.getElementById("button69").innerText = "Release";
		document.getElementById("name69").style.color = "#F00000";
	}else{
		document.getElementById("button69").innerText = "Set!";
		document.getElementById("name69").style.color = "#000080";
	}
	update();
}
function onClick70(){
	if(document.getElementById("button70").innerText == "Set!"){
		document.getElementById("button70").innerText = "Release";
		document.getElementById("name70").style.color = "#F00000";
	}else{
		document.getElementById("button70").innerText = "Set!";
		document.getElementById("name70").style.color = "#000080";
	}
	update();
}
function onClick71(){
	if(document.getElementById("button71").innerText == "Set!"){
		document.getElementById("button71").innerText = "Release";
		document.getElementById("name71").style.color = "#F00000";
	}else{
		document.getElementById("button71").innerText = "Set!";
		document.getElementById("name71").style.color = "#000080";
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
function onClick120(){
	if(document.getElementById("button120").innerText == "Set!"){
		document.getElementById("button120").innerText = "Release";
		document.getElementById("name120").style.color = "#F00000";
	}else{
		document.getElementById("button120").innerText = "Set!";
		document.getElementById("name120").style.color = "#000080";
	}
	update();
}
function onClick121(){
	if(document.getElementById("button121").innerText == "Set!"){
		document.getElementById("button121").innerText = "Release";
		document.getElementById("name121").style.color = "#F00000";
	}else{
		document.getElementById("button121").innerText = "Set!";
		document.getElementById("name121").style.color = "#000080";
	}
	update();
}
function onClick122(){
	if(document.getElementById("button122").innerText == "Set!"){
		document.getElementById("button122").innerText = "Release";
		document.getElementById("name122").style.color = "#F00000";
	}else{
		document.getElementById("button122").innerText = "Set!";
		document.getElementById("name122").style.color = "#000080";
	}
	update();
}