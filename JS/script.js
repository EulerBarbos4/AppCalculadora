
//Variaveis de escopo global

let tipofuncao = ''
let valoratual = ''
let memory = ''

//função que pega os valores atraves do click dos botões e adicona ao display
function clique(valor,tipo){

    let display = document.getElementById('display').innerText
    display = display.toString()
    //bloco para limitar o tamanho do numero que o usuario irá digitar
    if(display.length > 20){
        window.alert('Erro!!! Limite de caracteres atingido')
        window.location.reload()
    }
    
    
    //verifica se é um numero
    if(tipo==='numero'){
        //estrutura para evitar uma string que comece com 0
        let teste = document.getElementById('display').innerHTML
        if ((teste[0] =='0' && valor=='0')){
            //não irá executar nenhuma ação
        }else{
            //estrutura de if's para evitar a repetição do '.' na string de número 
            if(valor!=='.'){
                valoratual+=valor
                document.getElementById('display').innerHTML = valoratual
            }else if( valoratual === ''){
                valoratual = '0.'
                document.getElementById('display').innerHTML = valoratual
            }else if(valoratual.indexOf('.')===-1){
                valoratual+=valor
                document.getElementById('display').innerHTML = valoratual
            }
        }
            
    //verifica se é uma função (+,-,*,/)
    }else if(tipo==='funcao'){

    if(valor === '+'){
        if(tipofuncao === ''){
            tipofuncao = 'adicao'
        }
        if(memory!=='' && valoratual!==''){
            calcular()
            tipofuncao = 'adicao'
        }else{//este comando else serve para permitir a mudança de operação quando o usuario clicar 2 vezes seguidas em uma operação(soma,divisão.....)
            tipofuncao = 'adicao'
        }
    }else if(valor === '-'){
        if(tipofuncao === ''){
            tipofuncao = 'subtracao'
        }
        if(memory!=='' && valoratual!==''){
            calcular()
            tipofuncao = 'subtracao'
        }else{
            tipofuncao = 'subtracao'
        }
    }else if(valor === '*' ){
        if(tipofuncao === ''){
            tipofuncao = 'multiplicacao'
        }
        if(memory!=='' && valoratual!==''){
            calcular()
            tipofuncao = 'multiplicacao'
        }else{
            tipofuncao = 'multiplicacao'
        }
    }else if(valor === '/' ){
        if(tipofuncao === ''){
            tipofuncao = 'divisao'
        }
        if(memory!=='' && valoratual!==''){
            calcular()
            tipofuncao = 'divisao'
        }else{
            tipofuncao = 'divisao'
        }
    }

    if(memory===''){
        memory = Number(valoratual)
        valoratual = ''
        document.getElementById('display').innerHTML = ''
    }

    }else{
    window.alert('Erro!!!')
    window.location.reload()
    }
       
}

//função que limpa todos os dados da calculadora !!!CLEAR!!!    
function limpar(){
    if(aux = 1){
        window.location.reload()
    }
    tipofuncao = ''
    valoratual = ''
    memory = ''
    document.getElementById('display').innerHTML = 0
}

//função que remove o ultimo elemento da string de numeros
function apagaultimo(){
    let valordisplay = document.getElementById('display').innerHTML
    valordisplay = valordisplay.substring(0,valordisplay.length-1)
    valoratual = valordisplay
    document.getElementById('display').innerHTML = valordisplay
}


//funçao que executa o calculo
function calcular(){
    let resultado
    
    if(tipofuncao === 'adicao'){
        resultado = Number(valoratual) + memory
        document.getElementById('display').innerHTML = resultado
        tipofuncao = ''
        valoratual = ''
        memory = resultado
    }else if(tipofuncao === 'subtracao'){
        resultado = memory - Number(valoratual) 
        document.getElementById('display').innerHTML = resultado
        tipofuncao = ''
        valoratual = ''
        memory = resultado
    }else if(tipofuncao === 'multiplicacao'){
        resultado = memory * Number(valoratual)
        document.getElementById('display').innerHTML = resultado
        tipofuncao = ''
        valoratual = ''
        memory = resultado
    }else if(tipofuncao === 'divisao'){
        resultado = memory / Number(valoratual)
        document.getElementById('display').innerHTML = resultado
        tipofuncao = ''
        valoratual = ''
        memory = resultado
    }
}

let aux = 0 // variavel para verificar se houve entra via teclado
//Função que captura as entrada via teclado. 
function tecla(event){

    aux = 1; 
    //variavel que recebe o valor via teclado
    let entrada = event.key

    if(entrada == 0 || entrada == 1 || entrada == 2 || entrada == 3 || entrada == 4 ||
        entrada == 5 || entrada == 6 || entrada == 7 || entrada == 8 || entrada == 9 || entrada == '.'){   
        clique(entrada,'numero')
    }else if(entrada == '+' || entrada == '-' || entrada == '*' || entrada == '/'){
        clique(entrada,'funcao')
    }else if(entrada == 'Enter'){
        calcular()
    }else if (entrada == "Backspace"){ //se for backspace estamos a apagar
        apagaultimo()
    }

}