//Capturar evento de submit do formulário
const form = document.querySelector('#formulario');
form.addEventListener('submit', function(e){
  e.preventDefault();
  //estou pegando o input de botão com o id "peso" e atribuindo a uma variável
  const inputPeso = e.target.querySelector('#peso');
  const inputAltura = e.target.querySelector('#altura');
  
  //Acima eu peguei o input inteiro === inputPeso
  //Aqui abaixo vou extrair o valor desse input e atribuir em uma váriavel convertendo a um número
  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);

  //Com o valor extraido irei fazer uma verificação
  //Se for falso === diferente de numero, ele apresenta uma msg
  if(!peso){
    setResultado('Peso Inválido', false);
    return;
  }
  /*if(peso && altura ){
    setResultado('IMC É ....', false);
    return;
  }*/
  if(!altura) {
    setResultado('Altura Inválido', false)
    return
  }
  const imc = getImc(peso, altura)
  const nivelImc = getNivelImc(imc)

  const msg = `Seu IMC é ${imc} (${nivelImc}).`;
  
  setResultado(msg, true)
})

function getNivelImc (imc) {
  const nivelArr = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 
'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];
  if(imc >= 39.9) return nivelArr[5]
  if(imc >= 34.9) return nivelArr[4]
  if(imc >= 29.9) return nivelArr[3]
  if(imc >= 24.9) return nivelArr[2]
  if(imc >= 18.5) return nivelArr[1]
  if(imc < 18.5) return nivelArr[0]
}

function getImc(peso, altura) {
  const imc = peso / altura ** 2;
  return imc.toFixed(2);
}

//Função de criar parágrafos
function criaP () {
  const p = document.createElement('p');
  return p;
  //adiciona uma classe no paragrafo p
  //p.classList.add('paragrafo-resultado');
  //aparecer o paragrafo com classe no HTML.
  //p.innerHTML = 'Qualquer coisa';
}
function setResultado (msg, isValid) {
  const resultado = document.querySelector('#resultado');
  //innerhtml serve para mostrar no html
  resultado.innerHTML = '';
  const p = criaP();

  if(isValid) {
    p.classList.add('paragrafo-resultado')
  }else {
    p.classList.add('bad')
  }

  p.innerHTML = msg;
  resultado.appendChild(p)
  //return p;
  
}