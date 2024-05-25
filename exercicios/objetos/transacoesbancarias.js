const contaBancaria = {
    nome: "Maria",
    saldo: 0,
    depositar :function (valor){

        if(valor){
            this.saldo += valor
            this.historicos.push({
                tipo : "Deposito",
                valor
            })  
             console.log(`Deposito de R$${(valor / 100).toFixed(2)} realizado para o cliente: ${this.nome} `);
        }
        return valor
    },
    sacar: function (valor){

        if(valor > this.saldo){
            console.log(`Saldo insuficiente para o saque de: ${this.nome}`);
        }else {
            this.saldo -= valor;
            this.historicos.push({
                tipo: "Saque",
                valor
            })
            console.log(`Saque de R$${(valor / 100).toFixed(2)} realizado para o cliente: ${this.nome}`);
        }
        return valor

    },
    historicos: [],
    extrato : function (){
        console.log(`Extrato de ${this.nome} - saldo: R$${(this.saldo / 100).toFixed(2)}`);
        console.log("Historico:");

        for(let i = 0; i < this.historicos.length; i++){
            console.log(`${this.historicos[i].tipo} de $${(this.historicos[i].valor / 100).toFixed(2)}`);
          
        }
       

    // Extrato de Maria - Saldo: R$50
    // Histórico:
    // Depósito de $100
    // Saque de $50
    }
}
contaBancaria.depositar(10000);
contaBancaria.sacar(50000);
contaBancaria.sacar(5000);
contaBancaria.extrato();