function posicao(alturaEmCm) {
	if(alturaEmCm < 180){
		console.log("Reprovado");
	}else {
		if (alturaEmCm <= 185) {
			console.log("Libero");
		} else if(alturaEmCm <= 195){
			console.log("Ponteiro");
		}else if(alturaEmCm <= 205){
			console.log("Oposto");
		}else {
			console.log("Central");
		}
	}
}

posicao(179)