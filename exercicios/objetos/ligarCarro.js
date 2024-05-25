const carro = {
    ligado : false,
    velocidade : 0,
    mensagemDeRetorno: function(){
        return this.ligado ? "ligado" : "desligado"
    },
    statusAtual: function(){
        console.log(`carro ${this.mensagemDeRetorno()}, Velocidade: ${this.velocidade}`);  
    },
    ligar: function(){
        if(this.ligado){
            console.log("Este carro ja esta ligado.");
        }else {
            this.ligado = true;
            this.statusAtual()
        }
    },
    desligar: function(){
        if(!this.ligado){
            console.log("Este carro ja esta desligado.");
        }else{
            this.ligado = false
            this.velocidade = 0
            this.statusAtual()
        } 

    },
    acelerar: function (){
        if(!this.ligado){
            console.log("Nao é possivel acelerar um carro desligado");
        }else {
            this.velocidade += 10
            this.statusAtual()
        }
    },
    desacelerar: function(){
        if(!this.ligado){
            console.log("Nao é desacelerar um carro desligado");
        }else {
            this.velocidade -= 10
            this.statusAtual()
        }
    }
}

carro.desligar();
carro.ligar();
carro.ligar()
carro.acelerar()
carro.acelerar()
carro.desacelerar()
carro.desligar()
carro.acelerar()
carro.desacelerar()