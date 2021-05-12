let v0, v1;
let length, direction;
let v = [];

function setup() {
	frameRate(5);
createCanvas(windowWidth,windowHeight);

for(let i = 0; i < 10; i++){
	v[i] = createVector(i, i);
}
v0 = createVector(0,0);
v1 = createVector(50,50);
}
function draw() {
background(200);
drawRandomLine();
}

function drawRandomLine() {
	for(let j = 0; j < 10; j++){
		length = random(100);
		direction = int(random(3));
		if(direction == 0)
			for(let i = 0; i < length; i++){
				v[j].set(v[j].x + 1, v[j].y + 1);
				line(v0.x, v0.y, v[j].x, v[j].y);
				fill(100);
				v0.set(v[j].x, v[j].y);
			}
		else if(direction == 1)
			for(let i = 0; i < length; i++){
				v1.set(v[j].x + 1, v[j].y + 0);
				line(v0.x, v0.y, v[j].x, v[j].y);
				fill(200);
				v0.set(v[j].x, v[j].y);
			}
		else if(direction == 2)
			for(let i = 0; i < length; i++){
				v[j].set(v[j].x + 0, v[j].y + 1);
				line(v0.x, v0.y, v[j].x, v[j].y);
				fill(150);
				v0.set(v[j].x, v[j].y);
			}
		v0.set(v[j].x, v[j].y);
	}
}
