
function notas(nota) {
	if(nota < 4){
		console.log(" O estudando obteve conceito E");
	}else if (nota <= 5.9){
		console.log(" O estudando obteve conceito D");
	}else if (nota <= 7.9){
		console.log(" O estudando obteve conceito C");
	}else if (nota <= 8.9){
		console.log(" O estudando obteve conceito B");
	}else {
		console.log(" O estudando obteve conceito A");
	}	
}
notas(8)