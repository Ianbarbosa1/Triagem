let respostas = [
    'De acordo com os dados coletados, seus sintomas indicam que você pode está com sintomas da dengue. Recorra ao hospital mais próximo para verificar seu estado de saúde.',

    'Os sintomas assinalados não indicam algo grave, mantenha-se em repouso, se alimente corretamente e beba bastante aguá.',
    
    `Você não selecionou nenhuma das opções!`
]

var verificador = document.getElementById('D1', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7', 'D8', 'D9');


/*A CONDICIONAL*/
function evento(){
    if(D1.checked & D2.checked & D4.checked ){
        document.querySelector('.resultado').innerHTML = respostas[0];
        document.querySelector('.resultado').style.border = '1px solid red';
    }
    else if(D8.checked || D9.checked){
        document.querySelector('.resultado').innerHTML = respostas[0];
        document.querySelector('.resultado').style.border = '1px solid red';
    }
    else if(D1.checked & D3.checked & D4.checked & D7.checked){
        document.querySelector('.resultado').innerHTML = respostas[0];
        document.querySelector('.resultado').style.border = '1px solid red';
    }
    else if(D1.checked || D2.checked || D3.checked || D4.checked || D5.checked || D6.checked || D7.checked || D8.checked || D9.checked){
        document.querySelector('.resultado').innerHTML = respostas[1];
        document.querySelector('.resultado').style.border = '1px solid rgb(0, 255, 128)';
    }
    else if(D1.checked & D2.checked & D3.checked & D4.checked & D5.checked & D6.checked & D7.checked & D8.checked & D9.checked){
        document.querySelector('.resultado').innerHTML = respostas[0];
        document.querySelector('.resultado').style.border = '1px solid red';
    }
    else if(D1.checked == false & D2.checked == false & D3.checked == false & D4.checked== false & D5.checked == false & D6.checked == false & D7.checked == false & D8.checked == false & D9.checked == false){
        document.querySelector('.resultado').innerHTML = respostas[2];
        document.querySelector('.resultado').style.border = '1px solid rgba(100, 100, 100, 0.445)';
    }
}

