function verificacaoDeEntrada(possuiPatologia,altura,idade,ehEstudante){
	if(possuiPatologia === true || altura < 150 || idade <= 12 || idade >= 65 ){
		console.log("ACESSO NEGADO");
	}else if (ehEstudante === true || idade < 18){
		console.log("10 reais");
	}else {
		console.log("20 reais");
	}
}
verificacaoDeEntrada(false, 180, 18, true)