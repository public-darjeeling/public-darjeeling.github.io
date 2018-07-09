var canvas;
let ctx;

canvas = document.getElementById('canvas');
ctx = canvas.getContext('2d');
ctx.strokeRect(0,0,400,400);

ctx.beginPath();
ctx.moveTo(0,200);
ctx.lineTo(400,200);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(200,0);
ctx.lineTo(200,400);
ctx.stroke();


function onClick(){
	ctx.clearRect(0,0,400,400);
	
	ctx.strokeRect(0,0,400,400);

	ctx.beginPath();
	ctx.moveTo(0,200);
	ctx.lineTo(400,200);
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(200,0);
	ctx.lineTo(200,400);
	ctx.stroke();

	let xxx = parseFloat(document.getElementById('xxx').value);
	let xx = parseFloat(document.getElementById('xx').value);
	let x = parseFloat(document.getElementById('x').value);
	let n = parseFloat(document.getElementById('n').value);

	ctx.lineWidth = 2; //線の太さ
    for(i = -50;i < 50;i++){
	    ctx.beginPath(); //パスの描画を始める

	    console.log("x : " + (i * 4) + " y : " + (xxx * Math.pow(i,3) + xx * Math.pow(i,2) + x * Math.pow(i,1) + n) * 0.4);
        ctx.moveTo(i * 4 + 199,((xxx * Math.pow(i,3) + xx * Math.pow(i,2) + x * Math.pow(i,1) + n) * -0.4) + 200);
        ctx.lineTo(i * 4 + 201,((xxx * Math.pow(i,3) + xx * Math.pow(i,2) + x * Math.pow(i,1) + n) * -0.4) + 200);
        ctx.stroke(); //線の終了
	}

}

class Button {
	constructor (x, y, width, height, text) {
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.text = text;
	}

	install(canvas){
		var ctx = canvas.getContext('2d');
		ctx.strokeRect(this.x,this.y,this.width,this.height);
		ctx.fillText(this.text,(this.x + this.x + this.width) / 2,(this.y + this.y + this.height) / 2);
	}

	onClick(e){
		var mouseX = e.clientX - canvas.offsetLeft;
		var mouseY = e.clientY - canvas.offsetTop;
		if(this.x <= mouseX && mouseX <= this.width + this.x && this.y <= mouseY && mouseY <= this.height + this.y)
			return true;
		else
			return false;
	}
}

// https://html5experts.jp/takazudo/17355/