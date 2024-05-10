function ternario(saldo) {
	let resultado = (saldo <= 1.99 ? "real" : "reais" );
	console.log(`Você tem ${saldo} ${resultado}`);
}
ternario(2.99)