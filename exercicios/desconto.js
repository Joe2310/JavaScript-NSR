function desconto(valorDoProduto,tipoDePagamento){

	//tipo de pagamento (dinheiro, credito, debito, cheque).


let desconto = 0;

if (tipoDePagamento === "credito"){

	desconto = (valorDoProduto * 95 / 100).toFixed(2)
}else if (tipoDePagamento === "cheque"){
	desconto = valorDoProduto * 97 / 100

}else{
	desconto = valorDoProduto * 90 / 100
}


console.log(`Valor a ser pago: R$${(desconto / 100).toFixed(2)}`);
}

desconto(18050,"bhbhbhb")