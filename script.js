function Math(numero, tipo){
    var tela = document.getElementById("out");
    if(tipo == 'num'){
        tela.value += numero;
    }
    else if(tipo == 'sym'){
        if(numero == 'C'){
            tela.value = '';
        }
        else if(numero == '='){
            tela.value = eval(tela.value);
        }
        else{
            tela.value += numero;
        }
    }
}
