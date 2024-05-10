function compraParcelada(valorDaCompra,numeroDeParcelas) {
	if(numeroDeParcelas <= -1 || numeroDeParcelas >=13){

		console.log("Você deve escolher de 1 a 12 parcelas.");

	}else if (numeroDeParcelas === 1){

		const desconto = valorDaCompra - valorDaCompra * 10/100
		console.log(`Você deve pagar ${desconto} reais pois a vista tem 10 % de desconto.`);

	}else if(numeroDeParcelas <=6) {

		const parcelas = valorDaCompra / numeroDeParcelas;
		console.log(`Sua compra ficou ${numeroDeParcelas} parcelas de ${parcelas.toFixed(2)} cada.`);

	}else if ( numeroDeParcelas <=12) {

		montanteFinal = valorDaCompra * (1 + 1/100)** numeroDeParcelas
		valorAPagar = montanteFinal / numeroDeParcelas
		console.log(`Sua compra ficou ${numeroDeParcelas}x de ${valorAPagar.toFixed(2)}, total de ${montanteFinal.toFixed(2)} reais.`);
	}else{
		console.log("erro desconhecido");
	}
}
compraParcelada(100,1)

