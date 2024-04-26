function converterFah (fah){
	const celcius = (fah - 32)* 5/9
	console.log(`O valor de ${fah} fahrenheit em graus celcius é ${celcius.toFixed(2)}. `);
}
converterFah(73)