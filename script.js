function CalcularMedia( notas ) {

    let soma = 0;
    for( c = 0; c < notas.length; c++) {
        soma += notas[c];
    }
    
    media = soma / notas.length;
    
    return media;
    
    }
    
    let media; // escopo global
    
    function aprovacao( notas ) {
        let media = CalcularMedia( notas ); // escopo da função
        let condicao = media >= 7 ? "Aprovado" : "Reprovado";
      
      return 'media: ' + media + ' - Resultado: ' + condicao; 
    }

    // Função Recursivas

    function contagemRegressiva(numero){

        console.log(numero);

        let proximoNumero = numero - 1;

        if(proximoNumero > 0)
        contagemRegressiva(proximoNumero);

    }

    // contagemRegressiva(50;)

    document.addEventListener('submit', function(evento){
        evento.preventDefault();
        evento.stopImmediatePropagation();

        let formulario = document.getElementById('formulario-01');

        let dados = new FormData(formulario);

        let objeto = {};

        let notas = [];

        for(let key of dados.keys()) {
            objeto[key] = dados.get(key);

            // add itens na array
            notas.push(parseInt(dados.get(key)));

        }

        console.log(notas);

        console.log(objeto);

        document.getElementById('resultado').innerHTML = aprovacao(notas);

    });
    
    // console.log
    
    // console.log("Media: " + CalcularMedia([8, 8]))
    // console.log(aprovacao( CalcularMedia([8, 8])))
    // console.log(aprovacao([8, 8, 7]));
    
    // console.log("Media: " + CalcularMedia([8, 8, 10]))
    // console.log(aprovacao( CalcularMedia([8, 8, 10])))
    // console.log(aprovacao([8, 8, 10,6]));
    
    // console.log("Media: " + CalcularMedia([9, 6]))
    // console.log(aprovacao( CalcularMedia([9, 6])))
    // console.log(aprovacao([9, 6]));