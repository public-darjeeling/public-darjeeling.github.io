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

class label {
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
}

// https://html5experts.jp/takazudo/17355/