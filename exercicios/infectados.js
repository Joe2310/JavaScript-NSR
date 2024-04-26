
function infectados (po,x,t){
	// po= população, x = quantidade de pessoas infectadas, t = tempo 
	const p = po * x ** (t/7)
	console.log(p);
}
infectados(1000, 4, 7)