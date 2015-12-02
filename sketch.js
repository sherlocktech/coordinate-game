function setup() {
	createCanvas(600, 600);
}
var aX = 40;
var aY = 60;
function draw() {
	background(255);
	//grid
	strokeWeight(1);
	stroke(0);
	for(var i = 20; i <= width; i += 20) {
   	line(i, 0, i, height - 40);
 	}
	for(var j = 0; j <= height - 40; j += 20) {
		var num = 28;
   	line(20, j, width - 20, j);
 	}

	//point a
	strokeWeight(10);
	stroke(0, 0, 200);
	point(aX, aY);
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    aX -= 20;
  } else if (keyCode === RIGHT_ARROW) {
    aX += 20;
  } else if (keyCode === UP_ARROW) {
		aY -= 20;
	} else if (keyCode === DOWN_ARROW) {
		aY += 20;
	}
}
