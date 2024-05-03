function valorPagoeParcela(valorDoProduto,quantidadeDoParcelamento,valorPago) {
	const valorDaParcela = ((valorDoProduto / quantidadeDoParcelamento) / 100).toFixed(2)
	
	const parcelasPagas = valorPago / valorDaParcela
	
	console.log(`Restam ${(quantidadeDoParcelamento - parcelasPagas).toFixed(0)} parcelas de R$${valorDaParcela}`);
	
}	
valorPagoeParcela(100000,10,300)
