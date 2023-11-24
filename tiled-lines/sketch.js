const STEP = 20;

function setup() {
	createCanvas(500, 500);

	background(255);
	strokeWeight(2);

	noLoop();
}

function draw() {
	for (let x = 0; x < windowWidth; x += STEP) {
		for (let y = 0; y < windowHeight; y += STEP) {
			let leftToRight = Math.random() >= 0.5;
			if (leftToRight) {
				line(x, y, x + STEP, y + STEP);
			} else {
				line(x + STEP, y, x, y + STEP);
			}
		}
	}
}
