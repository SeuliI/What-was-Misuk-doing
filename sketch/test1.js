function setup() {
  createCanvas(windowWidth, windowHeight);
}
let = hh, mm, ss;
function draw() {
  background('#ACACAC');
  rect(windowWidth -100, windowHeight -100, 20, 20);

  hh = today.getHours();
  mm = today.getMinutes();
  ss = today.getSeconds();

  text(hh +":"+ mm +":", 500,500);

}

//setInterval