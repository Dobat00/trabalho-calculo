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

//VARIAVEIS MATEMATICA
let tamanho = 0;
buttonConfirm.onclick = () => {
  let conteudo = inputField.value;

  tamanho = conteudo;
  console.log(tamanho);
};

function calculo() {
  let volume = tamanho ^ 3;
}
