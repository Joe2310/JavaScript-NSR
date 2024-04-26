// Usando if e else

function par_impar (jogador1,jogador2){
	//const resultado = jogador1 + jogador2 % 2 = 0

	if ((jogador1 + jogador2) % 2 == 0) {
		console.log("Par");
	}else {
		console.log("Impar");
	}
}
par_impar(3,5)


//Usando ternário

function par_impar_ternario(jogador1,jogador2){
	console.log(resultado = ((jogador1 + jogador2) % 2 == 0 ? "Par" : "Impar" )); 
}
par_impar_ternario(1,0)