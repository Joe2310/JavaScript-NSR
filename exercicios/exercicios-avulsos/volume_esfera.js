function raioDeUmaEsfera(d) {
	// d = diametro, r = raio, v = volume
	const r = d / 2;
	const v = 4 / 3 * r ** 3;
	console.log(`O volume de uma esfera de raio ${r} é ${v} PI ou ${ v * Math.PI}`);
	
}

raioDeUmaEsfera(6)