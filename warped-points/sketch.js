const CELL_SIZE = 10;
const NOISE_SCALE = 0.001;
const NOISE_LEVEL = 800;
const BORDER = NOISE_LEVEL;

function setup() {
	createCanvas(windowWidth, windowHeight);

	background(0);
	stroke(255);

	noLoop();
}

function draw() {
	for (let y = -BORDER; y < height + BORDER; y += CELL_SIZE) {
		for (let x = -BORDER; x < width + BORDER; x += CELL_SIZE) {
			let n = noise(y * NOISE_SCALE, x * NOISE_SCALE) * NOISE_LEVEL;
			circle(x + n, y + n, 2);
		}
	}
}
