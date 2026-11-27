/* DN3008 Generative Art, Ashley Hi 2026
 * Week 5 - Randomness & Noise
 * Noise Shapes
 */

function setup() {
  createCanvas(512, 512);
  frameRate(100);
  noFill();
  stroke(255);
}

function draw() {
  background(170, 950, 400);

  // Uncomment the code to try the different examples.
  // Comment it again before running the next one.

  //=== 1 - square ===
   stroke(35, 508, 40);
  for (var i = 0; i < 90000; i++) {
    var x = random(600, width*0.0001 - 90);
    var y = random(200, height - 100);
    point(x, y);
  }
   // square shadow
  stroke(500, 0, 105);
  for (var i = 0; i < 5000; i++) {
    var sqBX = min(random(400, 350), random(10, 40));
    var sqBY = max(random(30, 250), random(50, 530));
    push();
    rotate(-PI / 500);
    point(sqBX, sqBY);
    pop();
  }

   // square shadow
  stroke(500, 0, 105);
  for (var i = 0; i < 5000; i++) {
    var sqBX = min(random(400, 350), random(10, 40));
    var sqBY = max(random(30, 250), random(50, 530));
    push();
    rotate(-PI / 500);
    point(sqBX, sqBY);
    pop();
  }
  //=== 2 - vertical line ===
  for (var i = 0; i < 2000; i++) {
   var x = random(width/2 - 20, width/2 + 20);
   var y = random(0,height);
   point(x,y);
  }

  //=== 3 - horizontal line ===
  for (var i = 0; i < 2000; i++) {
   var x = random(0,width);
   var y = random(height/2 - 20, height/2 + 20);
   point(x,y);
  }

  //=== 4 - circle ===
   stroke(4300, 200, 0);
  translate(width / 2, height / 2);
  for (var i = 0; i < 90000; i++) {
   var dist = (random(-0.20, 0.50) * width) / 2.5;
   var angle = random(0, PI * 2);
   var p = createVector(cos(angle), sin(angle));
   p.mult(dist);
   point(p.x, p.y);
  }

  //=== 5 - wave ===
  stroke(0, 00, 800);
  translate(-255, height / 10);
  var amp = 90; 
  for (var i = 0; i < 20000; i++) {
   var x = random(0, width);
   var y = cos((x / width) * PI * 6) * amp;
   y += random(-15, 15);
   point(x, y);
  }
}
