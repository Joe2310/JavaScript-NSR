function areaDoCilindro(raio,altura) {
	const area = 2 * Math.PI * raio * (raio + altura);
	console.log(`A area total do cilindro é ${area.toFixed(2)}`);
}
areaDoCilindro(2,3)