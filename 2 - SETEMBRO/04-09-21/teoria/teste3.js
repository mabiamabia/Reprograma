function inserirChave(){
    var numero = Number(prompt("Insira o número correto da chave: "));
    
    function confirmarChave(chave){
    
    if(chave == 1){
        alert("Chave esta correta")
    }else{
        return inserirChave()
        
    }
    }
    confirmarChave(numero)
    }
    
    inserirChave()
    