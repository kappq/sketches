const NUM_PARTICLES = 1000;
const NOISE_SCALE = 0.01;

let particles = [];

function setup() {
	// createCanvas(windowWidth, windowHeight);
	createCanvas(500, 500);

	stroke(255);
	strokeWeight(2);

	for (let n = 0; n < NUM_PARTICLES; n++) {
		let particle = createVector(random(width), random(height));
		particles.push(particle);
	}
}

function draw() {
	background(0, 10);

	for (let idx = 0; idx < particles.length; idx++) {
		let particle = particles[idx];
		point(particle.x, particle.y);

		let angle = noise(particle.x * NOISE_SCALE, particle.y * NOISE_SCALE, frameCount * NOISE_SCALE) * TWO_PI;
		particle.x += cos(angle);
		particle.y += sin(angle);

		if (!isOnScreen(particle)) {
			particle.x = random(width);
			particle.y = random(height);
		}
	}
}

function isOnScreen(particle) {
	return particle.x >= 0 && particle.x < width && particle.y >= 0 && particle.y < height;
}
