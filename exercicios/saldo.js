function saldo(saldo) {
	if (saldo <= 0.99) {
		console.log(`Seu saldo é ${saldo.toFixed(2)} centavos`);
	}else if(saldo <= 1.99) {
		console.log(`Seu saldo é ${saldo.toFixed(2)} real`);
	}else {
		console.log(`Seu saldo é ${saldo.toFixed(2)} reais.`);
	}
	
}
saldo(0.99)