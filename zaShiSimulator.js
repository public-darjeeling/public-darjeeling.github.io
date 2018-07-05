function onClick(){
	let X = document.getElementById('inputX').value;
	let N = document.getElementById('inputN').value;
	let ans = 0;
	console.clear();

	for(i = 0;i < N;i++){
		var A = Math.floor(Math.random() * X);
		var B = Math.floor(Math.random() * X);
		var C = Math.floor(Math.random() * X);
		var D = Math.floor(Math.random() * X);
		
		console.log("A:" + A + " B:" + B + " C:" + C + " D:" + D + " SUM:" + (A + B + C + D));
		if(X >= A + B + C + D)
			ans++;
	}
	var answer = 100 * ans / N;
	document.getElementById('output').innerHTML = "確率 = " + answer + " %";
}