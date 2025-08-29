function setup() {
  createCanvas(800, 800);
  noLoop();
}

function draw() {
  background(0);
  noStroke();
  
  // Create a galaxy-like spiral pattern with just ellipses
  fill(255);
  ellipse(400, 400, 600, 50);
  ellipse(400, 400, 50, 600);
  
  fill(0);
  ellipse(400, 400, 400, 30);
  ellipse(400, 400, 30, 400);
  
  fill(255);
  ellipse(400, 400, 250, 20);
  ellipse(400, 400, 20, 250);
  
  // Radiating spokes with extreme ellipses
  fill(0);
  ellipse(200, 200, 300, 10);
  ellipse(600, 200, 300, 10);
  ellipse(200, 600, 300, 10);
  ellipse(600, 600, 300, 10);
  
  // Diagonal streaks
  fill(255);
  ellipse(300, 150, 400, 8);
  ellipse(500, 650, 400, 8);
  ellipse(150, 300, 8, 400);
  ellipse(650, 500, 8, 400);
  
  // Central explosion effect with varying sizes
  fill(0);
  ellipse(400, 400, 180, 180);
  fill(255);
  ellipse(400, 400, 120, 120);
  fill(0);
  ellipse(400, 400, 80, 80);
  fill(255);
  ellipse(400, 400, 40, 40);
  fill(0);
  ellipse(400, 400, 15, 15);
  
  // Corner bursts
  fill(255);
  ellipse(50, 50, 100, 20);
  ellipse(750, 50, 100, 20);
  ellipse(50, 750, 100, 20);
  ellipse(750, 750, 100, 20);
  ellipse(50, 50, 20, 100);
  ellipse(750, 50, 20, 100);
  ellipse(50, 750, 20, 100);
  ellipse(750, 750, 20, 100);
  
  // Edge accents
  fill(0);
  ellipse(400, 50, 150, 30);
  ellipse(400, 750, 150, 30);
  ellipse(50, 400, 30, 150);
  ellipse(750, 400, 30, 150);
}