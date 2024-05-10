function rematrícula(idadeDoAluno,possuiResponsavel) {
		if(idadeDoAluno >= 18 || idadeDoAluno < 18 && possuiResponsavel === true ){
		console.log("Rematrícula realizada com sucesso");
	}else{
		console.log("Não é possível fazer a rematrícula");
	}
	
}
rematrícula(16,true)