function onClick(){
	// 入力されたX,Nと変数A ~ Dの取り得る範囲を取得する
	let X = parseInt(document.getElementById('inputX').value);
	let N = parseInt(document.getElementById('inputN').value);
	let MIN_A = parseInt(document.getElementById('inputMinA').value);
	let MIN_B = parseInt(document.getElementById('inputMinB').value);
	let MIN_C = parseInt(document.getElementById('inputMinC').value);
	let MIN_D = parseInt(document.getElementById('inputMinD').value);
	let MAX_A = parseInt(document.getElementById('inputMaxA').value);
	let MAX_B = parseInt(document.getElementById('inputMaxB').value);
	let MAX_C = parseInt(document.getElementById('inputMaxC').value);
	let MAX_D = parseInt(document.getElementById('inputMaxD').value);

	// 式を満たしたときカウントする変数を定義する
	let ans = 0;
	// 表示された試行を消す
	console.clear();

	for(i = 0;i < N;i++){
		// A,B,C,Dそれぞれに0からXまでの乱数を与える
		// 具体的には、Math.random()が0～1の数字をランダムで与えるので
		// それに(MAX_K - MIN_K)を掛けることで0~(MAX_K - MIN_K)の実数が与えられる
		// それにMIN_Kを足すことでMIN_K ~ MAX_Kの乱数を取得することができる
		// それをMath.floorで整数にしている(小数切り捨て)
		var a = Math.floor(Math.random() * (MAX_A - MIN_A)) + MIN_A;
		var b = Math.floor(Math.random() * (MAX_B - MIN_B)) + MIN_B;
		var c = Math.floor(Math.random() * (MAX_C - MIN_C)) + MIN_C;
		var d = Math.floor(Math.random() * (MAX_D - MIN_D)) + MIN_D;
		
		// A,B,C,Dと合計を表示する
		console.log("A:" + a + " B:" + b + " C:" + c + " D:" + d + " SUM:" + (a + b + c + d));
		// 式を満たしていた時ansを一つ増やす
		if(X >= a + b + c + d)
			ans++;
	}
	// 成功回数/試行回数*100を行う
	// 確率を%で表示するため
	var answer = 100 * ans / N;
	// 結果を表示する
	document.getElementById('output').innerHTML = "確率 = " + answer + " %";
}