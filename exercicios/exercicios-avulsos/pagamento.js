function pagamento(rendaMensalEmCentavos,mesesDecorridos,totalJaPagoPeloAluno) {
	if (rendaMensalEmCentavos <=200000 && totalJaPagoPeloAluno < 1800000){
		console.log("O valor da parcela desse mês é R$ 0 reais. Nenhum valor é devido pois a renda do estudante está abaixo do valor mínimo de R$ 2000 reais.");
	
	}else if(mesesDecorridos > 60 && totalJaPagoPeloAluno  <= 1799999){
		console.log("Não deve nada,curso quitado");
	
	}else if (totalJaPagoPeloAluno === 1800000){
		console.log("Não deve nada, pois ja quitou a divida");
	
	}else if (totalJaPagoPeloAluno < 18000_00 && mesesDecorridos <=60 ){
		const valor = (((18 / 100) * rendaMensalEmCentavos)/100).toFixed(0)
		console.log(`O valor da sua parcela é ${valor} reais`);
	
	}
	
}
pagamento(500000,12,1700000)

