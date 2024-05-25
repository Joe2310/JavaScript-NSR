//VERIFICA SE TEM UM STRING E RETORNA O INDEX 


const email = "email@hotmail.com"


const indexArroba = email.indexOf("@")
const indexPonto = email.indexOf(".",indexArroba)

if(indexPonto > indexArroba){
    console.log("Email completo");
}else {
    console.log("Nao atende aos requisitos.");
}