
function angulosInternos (n){
	// s = soma dos angulos internos, ai = area interna de cada angulo
	const s = (n - 2) * 180;
	console.log(`A soma dos angulos internos é ${s}.`);
	const ai = s / n
	console.log(`A area de cada angulo caso sejam todos iguais cada um vale ${ai}.`);
}
angulosInternos(10)