const STEP = 20;

function setup() {
	createCanvas(500, 500);

	background(255);
	strokeWeight(2);

	noLoop();
}

function draw() {
	for (let x = 0; x < width; x += STEP) {
		for (let y = 0; y < height; y += STEP) {
			let horizontal = Math.random() >= 0.5;
			if (horizontal) {
				line(x, y + STEP / 2, x + STEP, y + STEP / 2);
			} else {
				line(x + STEP / 2, y, x + STEP / 2, y + STEP);
			}
		}
	}
}
