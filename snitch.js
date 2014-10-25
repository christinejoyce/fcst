

var FACE_DIR = {
	LEFT:0,
	RIGHT:1
}

function Position(_x,_y){
	this.x = _x;
	this.y =_y;
}


function Snitch(){
	this.position = new Position(0,0);
	this.imageLink = "images/snitch.png";
	this.facing = FACE_DIR.LEFT;
	this.setPosition = function(_x,_y){
		this.position.x = _x;
		this.position.y = _y;
	}
}
snitch1 = new Snitch();