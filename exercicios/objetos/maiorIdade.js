const usuarios = [
    {
        nome: "João",
        idade: 25,
    },
    {
        nome: "Ana",
        idade: 18,
    },
    {
        nome: "Beatriz",
        idade: 15,
    },
    {
        nome: "Carlos",
        idade: 16,
    },
    {
        nome: "Antonio",
        idade: 32,
    },
]

for( let item of usuarios){

    if (item.idade < 18){
       item.maiorIdade = false 
       }else {
        item.maiorIdade= true
    }
}

console.log(usuarios);
