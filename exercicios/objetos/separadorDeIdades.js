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

const jovem = []
const adulto = [] 

for(let item of usuarios){
    if(item.idade <18){
        jovem.push(item)
    }else {
        adulto.push(item)
    }
}

console.table( jovem);
console.table(adulto);