const cadastro = {
     identificador : "12345",
     nome : "José silva costa",
     email : "      jose@email.com  ",
     formatarIdentificador : function(){
        const retorno = this.identificador.padStart(6, "000000");
        return console.log(retorno);
     },
     nomeFormatado: function(){
        const quebraDeNome = this.nome.split(" ");
        
        let formatado = "";
        for(let item of quebraDeNome){
            
            let primeiraLetra = item.slice(0,1);
          
            let restanteDoNome = item.slice(1)
            
           
            formatado += primeiraLetra.toUpperCase() + restanteDoNome + " "
        
        }
        return console.log(formatado);
    
    },
    formatarEmail: function(){
        let formatado = this.email.trim();
        return console.log(`${formatado}`);
    }

    

}


cadastro.formatarIdentificador();
cadastro.formatarEmail();
cadastro.nomeFormatado();
