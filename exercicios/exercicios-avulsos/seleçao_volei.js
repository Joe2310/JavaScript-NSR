
function selecao_volei(altura) { 
	if(altura < 1.79){
		console.log("reprovado");
		
	}
	else if (altura <= 1.85){
		
	   console.log("Libero");

   }else if (altura <= 1.95){
	    
	   console.log("Ponteiro");

   }else if (altura <= 2.05){
	
	   console.log("Oposto");
   }else {
	
	   console.log("Central");
   }
   
}

selecao_volei(1.95)