const array = [1,2,3,4,5,6,7,8,9]

const [a,b, ...resto] = array
console.log(a,b);

console.log(resto);

console.log(a,b, resto);