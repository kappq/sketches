const CELL_SIZE = 20;
const NOISE_SCALE = 0.001;
const NOISE_LEVEL = 800;
const BORDER = NOISE_LEVEL;

function setup() {
	createCanvas(windowWidth, windowHeight);

	background(0);

	noLoop();
}

function draw() {
	let isWhite = true;

	for (let y = -BORDER; y < height + BORDER; y += CELL_SIZE) {
		for (let x = -BORDER; x < width + BORDER; x += CELL_SIZE) {
			let n1 = noise(y * NOISE_SCALE, x * NOISE_SCALE) * NOISE_LEVEL;
			let n2 = noise(y * NOISE_SCALE, (x + CELL_SIZE) * NOISE_SCALE) * NOISE_LEVEL;
			let n3 = noise((y + CELL_SIZE) * NOISE_SCALE, (x + CELL_SIZE) * NOISE_SCALE) * NOISE_LEVEL;
			let n4 = noise((y + CELL_SIZE) * NOISE_SCALE, x * NOISE_SCALE) * NOISE_LEVEL;

			if (isWhite) {
				fill(0);
			} else {
				fill(255);
			}

			quad(
				x + n1, y + n1,
				x + CELL_SIZE + n2, y + n2,
				x + CELL_SIZE + n3, y + CELL_SIZE + n3,
				x + n4, y + CELL_SIZE + n4,
			);

			isWhite = !isWhite;
		}
	}
}
