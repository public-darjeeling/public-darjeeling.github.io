var canvas;
var controller;
var ctz;


function init(){
	canvas = document.getElementById('canvas');
	controller = new CPUController(canvas);
	ctx = canvas.getContext('2d');
	ctx.strokeRect(0,0,400,400);

	node = controller.createObject("div","title",10,10);
	node.install();
}

class CPUController{
	constructor(canvas){
		this.canvas = canvas;
		document.getElementById('form').style = "position:relative";
	}
	createObject(tag,text,x,y){
		var object = new Node(canvas,tag,x,y,text);
		return object;
	}
}

class Node{
	constructor (canvas,tag,x,y,text){
		this.canvas = canvas;
		this.tag = tag;
		this.x = x;
		this.y = y;
		this.string = text;
		this.style = "padding-top: " + y + "px;padding-left:" + x + "px;position:absolute;";
	}
	install(){
		document.getElementById('form').innerHTML += "<" + this.tag + " style=\"" + this.style + "\">" + this.string + "</" + this.tag + ">";
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
}

// https://html5experts.jp/takazudo/17355/