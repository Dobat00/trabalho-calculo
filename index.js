// import { derivative } from "mathjs";
// let math = require("mathjs");
// let derivada = math.derivative();
// console.log(derivada);

//video de referencia
// https://www.youtube.com/watch?v=wCVuupUndb0
// https://www.youtube.com/watch?v=Pup_Rr4DSV8

//ELEMENTOS DO DOM
let divMain = document.getElementById("main");
let teste = document.createElement("h1");
teste.textContent =
  "Digite o tamanho do quadrado (em metros quadrados), e o programa ira retornar o valor otimizado de X, para que a caixa tenha o maior volume";

divMain.appendChild(teste);
console.log(divMain);
let inputField = document.createElement("input");
inputField.placeholder = " area em metro quadrado";
divMain.appendChild(inputField);

let buttonConfirm = document.createElement("button");
buttonConfirm.textContent = "confirmar";
divMain.appendChild(buttonConfirm);

let divResultado = document.createElement("div");
let tResultado = document.createElement("p");
divResultado.appendChild(tResultado);
divMain.appendChild(divResultado);

//elementos do dom do segundo problema (triangulo)
let divProb2 = document.createElement("div");
divMain.appendChild(divProb2);
let texto2 = document.createElement("h1");
texto2.textContent =
  "Insira os valores dos catetos, para descobrir a maior area.";
divProb2.appendChild(texto2);
let input2 = document.createElement("input");
input2.placeholder = "valor do cateto 1";
let input3 = document.createElement("input");
input3.placeholder = "valor do cateto 2";
divProb2.appendChild(input2);
divProb2.appendChild(input3);
let buttonTriangulo = document.createElement("button");
divProb2.appendChild(buttonTriangulo);
buttonTriangulo.textContent = "confirmar";

//resultado do problema 2
let resultadoTriangulo = document.createElement("p");
divProb2.appendChild(resultadoTriangulo);

//VARIAVEIS MATEMATICA
let x = 0;
buttonConfirm.onclick = () => {
  let conteudo = inputField.value;
  x = optimalYSize(conteudo);
  console.log(x);
  tResultado.textContent = `o valor de X para o maior volume: ${x}`;
};

buttonTriangulo.onclick = () => {
  console.log("problema 2");
  let conteudo = input2.value;
  let conteudo2 = input3.value;
  let result = calcularAreaMaxima(conteudo, conteudo2);
};

// funcao que encontra o valor otimizado de Y
function optimalYSize(X) {
  // Funcao que define o volume
  function volume(Y) {
    return (X - 2 * Y) ** 2 * Y;
  }

  // Funcao que encontra a derivada do volume
  function derivative(Y) {
    return -8 * X * Y + 12 * Y ** 2;
  }

  // Realiza a otimizacao numerica de maneira iterativa
  function optimize(initialGuess, learningRate, iterations) {
    let currentY = initialGuess;

    for (let i = 0; i < iterations; i++) {
      currentY = currentY - learningRate * derivative(currentY);
    }

    return currentY;
  }

  //Define os valores iniciais de guess, rate, e o numerop de iteracoes
  const initialGuess = X / 4;
  const learningRate = 0.01;
  const iterations = 1;

  //realiza a otimizacao
  const optimalY = optimize(initialGuess, learningRate, iterations);

  return optimalY;
}
function calcularAreaMaxima(val1, val2) {
  // Obter os valores dos catetos
  var catetoA = val1;
  var catetoB = val2;
  // Calcular as dimensões do retângulo para área máxima
  var largura = catetoA < catetoB ? catetoA : catetoB;
  var altura = (catetoA * catetoB) / (2 * largura);

  // Calcular a área máxima
  var areaMaxima = largura * altura;

  resultadoTriangulo.textContent = `Dimensoes do retangulo: Largura:${largura}, Altura:${altura}, Area Maxima: ${areaMaxima}`;
  return largura, altura, areaMaxima;
  // Exibir o resultado
}
