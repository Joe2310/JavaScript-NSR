function pedraPapelTesoura(jogador1, jogador2){
	
	if (jogador1 == jogador2){
		console.log("Empate");
	
	
		//jogador 1
		
	
	}else if (jogador1 == "papel" && jogador2 == "pedra" ){
		console.log("papel ganhou");
	}else if(jogador1 == "tesoura" && jogador2 == "papel"){
		console.log("tesoura ganhou");
	
	}else if (jogador1 == "pedra" && jogador2 == "tesoura"){
		console.log("pedra ganhou");
	
		// jogador 2
	
	}else if (jogador2 == "papel" && jogador1 == "pedra" ){
		console.log("papel ganhou");
	}else if(jogador2 == "tesoura" && jogador1 == "papel"){
		console.log("tesoura ganhou");
	
	}else if (jogador2 == "pedra" && jogador1 == "tesoura"){
		console.log("pedra ganhou");
	}

}
pedraPapelTesoura("papel","papel")

