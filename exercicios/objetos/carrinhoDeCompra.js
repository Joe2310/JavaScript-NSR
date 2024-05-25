const carrinho = {
    nomeDoCliente: "Guido Bernal",
    produtos: [
        {
            id: 1,
            nome: "Camisa",
            qtd: 3,
            precoUnit: 3000
        },
        {
            id: 2,
            nome: "Bermuda",
            qtd: 2,
            precoUnit: 5000
        }
    ],
    imprimirResumo :function (){
        
        
        let valorTotal = 0;
        let qtdDeItens = 0;
        for (let item of this.produtos){
            let valorTotalPorItem = item.precoUnit * item.qtd /100;
            valorTotal += valorTotalPorItem
            qtdDeItens += item.qtd;
        }
        console.log(`Cliente: ${this.nomeDoCliente}`);
        console.log(`Quantidade de itens: ${this.calcularTotalDeItens()}`);
        console.log(`Total a pagar: R$ ${(this.calcularTotalAPagar() / 100).toFixed(2)}`);
        console.log(`Desconto de : R$ ${((this.calcularDesconto() / 100).toFixed(2))}`);
        console.log(`Total a pagar com desconto: R$ ${this.totalAPagar().toFixed(2)}`);
    },
    addProduto: 
    function (produto){
        let produtoExistente = -1;
        for (let i = 0; i < this.produtos.length; i++){ 
            if(this.produtos[i].id === produto.id){
                produtoExistente = 1;
                break;
            }
        }
        if(produtoExistente === -1){
            this.produtos[this.produtos.length] = produto;
        }else {
            this.produtos[produtoExistente].qtd += produto.qtd;
        }
    },
    calcularTotalDeItens: function () {
        let qtdDeItens = 0;
        for (let item of this.produtos){
            
            qtdDeItens += item.qtd;
            
        }
      return qtdDeItens;
    },
    calcularTotalAPagar: function () {

        let valorTotal = 0;
        for (let produto of this.produtos){

            valorTotal += produto.precoUnit * produto.qtd;
        }     
        
        return valorTotal ;
    },
    calcularDesconto: function(){
        let qtdDeItens = this.calcularTotalDeItens();
        let valorDasUnidades = this.calcularTotalAPagar();

        let descontoPorItens = 0;
        let descontoPortotal = 0;

        if(qtdDeItens > 4){
            descontoPorItens = this.produtos[0].precoUnit
            for(let i = 1; i< this.produtos.length; i++){
                if(this.produtos[i].precoUnit < descontoPorItens){
                    descontoPorItens = this.produtos[i].precoUnit;
                }
            }
        }

        if( valorDasUnidades > 10000){
                descontoPortotal = valorDasUnidades * 0.1;
                
        }
        
        
        return descontoPorItens > descontoPortotal ? descontoPorItens  : descontoPortotal
     },
    totalAPagar : function(){
        let desconto = (this.calcularDesconto()/ 100).toFixed(2);
        let total = (this.calcularTotalAPagar()/ 100).toFixed(2);
     
        return total - desconto;
        
        
    },   
    imprimirDetalhes :function (){
        console.log(" ");
        console.log(`Cliente: ${this.nomeDoCliente}`);
        console.log("--------------//-------------------");
        
        let qtdDeItens = this.calcularTotalDeItens();
        let valorDasUnidades = this.calcularTotalAPagar();
        for (let i =0; i < this.produtos.length; i++){
            
            let produto = this.produtos[i];

            qtdDeItens = produto.qtd;
            valorDasUnidades = (produto.precoUnit / 100)  * produto.qtd;
        
         

            console.log(`Item ${i +1} - ${produto.nome} - ${qtdDeItens} Unidade - Preco da unidade: R$${(produto.precoUnit / 100).toFixed(2)} - Total R$${(valorDasUnidades).toFixed(2)}`);
        }
        
        this.calcularTotalDeItens();
        this.calcularTotalAPagar();
       

}
}

const novaBermuda = {
    id: 2,
    nome: "Bermuda",
    qtd: 3,
    precoUnit: 5000
}


const novoTenis = {
    id: 3,
    nome: "Tenis",
    qtd: 1,
    precoUnit: 10000
}

carrinho.addProduto(novaBermuda);
carrinho.addProduto(novoTenis);

 carrinho.imprimirDetalhes()
 console.log("--------------------//-----------------");
 carrinho.imprimirResumo()
 console.log("--------------------//-----------------");






