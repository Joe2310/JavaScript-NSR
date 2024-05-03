function IsencaoDeImpostos(portadoraDeDoenca,aposentada,totalDeRendimentos) {
	if(portadoraDeDoenca === true || aposentada === true){ 
		console.log("ISENTA");
	}else if (totalDeRendimentos <= 2855970){
		console.log("VAZA LEAO! JA TA DIFICIL SEM VOCE");
	}else {
		console.log("PEGA LEAO");
	}
}
IsencaoDeImpostos(false, false, 2500000)