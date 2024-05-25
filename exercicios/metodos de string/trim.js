//REMOVE OS ESPAÇOS NO COMEÇO E NO FINAL DE UM STRING
const email = " joehotmail.com    ";

let formatado = email.trim();
console.log(`-${formatado}-`);