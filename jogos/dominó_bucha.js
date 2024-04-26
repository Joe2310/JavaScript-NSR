
// COM IF E ELSE

function bucha_IF_ELSE(ladoA,ladoB) {
	if(ladoA == ladoB){
		//console.log("É uma bucha");
		if (ladoA == 0) {
			console.log("BRANCO");
		}else if (ladoA == 1){
			console.log("ÁS");
		}else if (ladoA == 2){
			console.log("DUQUE");
		}else if (ladoA == 3){
			console.log("TERNO");
		}else if (ladoA == 4){
			console.log("QUADRA");
		}else if (ladoA == 5){
			console.log("QUINA");
		}else if (ladoA == 6){
			console.log("SENA");
		}
	}else {
		console.log("Não é uma bucha");
	}
}
bucha_IF_ELSE(4,4)

// COM TERNARIO

function bucha_TERNARIO(ladoA,ladoB) {
	console.log(resultado = ladoA == ladoB ? "É uma bucha" : "Não é uma bucha");
}
bucha_TERNARIO(4,4)