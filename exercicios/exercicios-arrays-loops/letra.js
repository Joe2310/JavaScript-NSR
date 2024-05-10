const letras = ["A", "a", "B", "C","E","e"];

indice = 0;
let resultado = false;
for (let letra of letras){
    if(letra == "E" || letra === "e"){
        indice++
        resultado = true;
    }
}
if(indice >= 1){
    console.log(`Foram encontradas ${indice} letras 'E' ou 'e'.`);
}else {
    console.log("Nenhuma letra 'E' ou 'e' foi encontrada.");
}