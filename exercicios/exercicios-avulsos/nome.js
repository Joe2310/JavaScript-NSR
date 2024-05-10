function nome(primeiroNome,sobrenome,apelido) {
	if(apelido){
		console.log(`${apelido}`);
	}else if (sobrenome){
		console.log(`${primeiroNome} ${sobrenome}`);
	}else {
		console.log(`${primeiroNome}`);
	}
}
nome("mario",false, "Bros")
