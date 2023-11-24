const NUM_PARTICLES = 400;
const NUM_STEPS = 1000;
const NOISE_SCALE = 0.03;

let particles = [];

function setup() {
	createCanvas(windowWidth, windowHeight);

	background(0);
	stroke(255);

	noLoop();
}

function draw() {
	for (let n = 0; n < NUM_PARTICLES; n++) {
		let particle = createVector(random(width), random(height));
		particles.push(particle);
	}

	for (let n = 0; n < NUM_STEPS; n++) {
		for (let idx = 0; idx < particles.length; idx++) {
			let particle = particles[idx];
			point(particle.x, particle.y);

			let angle = noise(particle.x * NOISE_SCALE, particle.y * NOISE_SCALE) * TWO_PI;
			particle.x += cos(angle);
			particle.y += sin(angle);

			if (!isOnScreen(particle)) {
				continue;
			}
		}
	}
}

function isOnScreen(particle) {
	return particle.x >= 0 && particle.x < width && particle.y >= 0 && particle.y < height;
}
