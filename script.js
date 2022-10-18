let s;

function setup() {
  createCanvas(400, 520);
}

function draw() {
  s = new Scribble();
  frameRate(1);
  background(3,37,126);
  strokeWeight(5);
 
  //top rectangle
  stroke('#001440').hex();
  s.scribbleFilling([25,25,375,375],
    [10,185,185,10], 
    random(5, 10), 
    random(0, 360));
  s.scribbleRect(200,100,350,175);

  //middle rectangle
  stroke('#597CDE').hex();
  s.scribbleFilling([25,25,375,375], 
    [200,300,300,200], 
    random(5, 10), 
    random(0,360));
  s.scribbleRect(200,250,350,100);

  //bottom rectangle
  stroke('#26355E').hex();
  s.scribbleFilling([25,25,375,375],
    [310,485,485,310],
    random(5,10),
    random(0, 360));
  s.scribbleRect(200,400,350,175);
}