
function desconto (precoDoTenis,meuDinheiro){
	const desconto = precoDoTenis - meuDinheiro;
	const cupom = 100 * desconto / precoDoTenis;
	console.log(cupom.toFixed(2));

}
desconto(12999,8000)