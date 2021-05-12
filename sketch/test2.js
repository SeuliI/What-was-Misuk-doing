let v = [], r = [];
let k = 0;

let force = [];
let gravity = 1.1;

let dis = [];
let limit = [];

let play = false;


function setup() {
  createCanvas(400, 400);
  makeVector();
  makeRect();

  
}

function draw() {
  background(220);
  translate(80,100);
  makeRect();
  
  throwRect();
  
}

function mousePressed(){
    if(play == false){
      loop();
      play = true;
    }else{
      noLoop();
      play = false;
    }
}

function makeVector(){
  for(let i=0; i<10; i++){
    for(let j=0; j<10; j++){
      v[k] = createVector((i+1)*20,(j+1)*20);
      
      force[k] = random(7,20);
      limit[k] = 0.5;
      
      dis[k++] = random(-4,4); 
    }
  }
}

function makeRect(){
  for(k=0; k<100; k++)
    ellipse(v[k].x,v[k].y,20,20);
}

function throwRect(){
  for(k=0; k<100; k++){
    if(v[k].y < 250){
      if(force[k] > limit[k]){ 
        force[k] /= gravity;
        v[k].set(v[k].x+dis[k], v[k].y-force[k] * (deltaTime / 100));
      }else{
        limit[k] = limit[k]*gravity;
        v[k].set(v[k].x+dis[k], v[k].y+limit[k] );
      }    
    }else{
      v[k].set(v[k].x, 250);
    }
  }
}
