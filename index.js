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
teste.textContent = "teste";

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

//VARIAVEIS MATEMATICA
let x = 0;
buttonConfirm.onclick = () => {
  let conteudo = inputField.value;
  x = optimalYSize(conteudo);
  console.log(x);
  tResultado.textContent = `o valor de X para o maior volume: ${x}`;
};

// Function to find the optimal Y for maximum volume
function optimalYSize(X) {
  // Define the volume function
  function volume(Y) {
    return (X - 2 * Y) ** 2 * Y;
  }

  // Function to find the derivative of the volume function
  function derivative(Y) {
    return -8 * X * Y + 12 * Y ** 2;
  }

  // Function to perform numerical optimization (gradient descent)
  function optimize(initialGuess, learningRate, iterations) {
    let currentY = initialGuess;

    for (let i = 0; i < iterations; i++) {
      currentY = currentY - learningRate * derivative(currentY);
    }

    return currentY;
  }

  // Set initial guess, learning rate, and iterations
  const initialGuess = X / 4; // You can adjust this based on your problem
  const learningRate = 0.01; // You can adjust this based on your problem
  const iterations = 1; // You can adjust this based on your problem

  // Perform optimization
  const optimalY = optimize(initialGuess, learningRate, iterations);

  return optimalY;
}
