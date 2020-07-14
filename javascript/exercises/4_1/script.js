// 60 opções, 1 até 60
// Escolha de no mínimo 6 números
// Se acertar 4 números, você recebe um valor pequeno
// Se acertar 5 números, você recebe um valor médio
// Se acertar 6 números, você recebe um valor grande

function rentornaNumeroEntreUmESessenta() {
  return Math.ceil(Math.random() * 60);
}

// Local para armazenamento dos nossos números
let firstPlay = [6, 19 , 26, 35 , 57, 58];
let secondPlay = [3, 8, 32, 36, 19, 10];
let thirdPlay = [21, 2, 18, 3, 8, 10];
// Array com números sorteados
let megaSenaNumbers = [];
let firstNumber = rentornaNumeroEntreUmESessenta();
let secondNumber = rentornaNumeroEntreUmESessenta();
let thirdNumber = rentornaNumeroEntreUmESessenta();
let fouthNumber = rentornaNumeroEntreUmESessenta();
let fifthNumber = rentornaNumeroEntreUmESessenta();
let sixthNumber = rentornaNumeroEntreUmESessenta();
megaSenaNumbers = [firstNumber, sixthNumber, thirdNumber, fouthNumber, fifthNumber, sixthNumber];

// console.log(firstPlay)
// console.log(megaSenaNumbers)

// Verificar a quantidade de números acertados
// Ter uma variável que guarda a quantidade de números certos
// Ter uma forma de comparar os dois arrays
let numberOfHits = 0;

for (let posicao = 0; posicao < megaSenaNumbers.length; posicao += 1) {
  // console.log("For de fora, número: " + megaSenaNumbers[posicao]);
  for (let posicaoInterna = 0; posicaoInterna < firstPlay.length; posicaoInterna += 1) {
    if (megaSenaNumbers[posicao] === firstPlay[posicaoInterna]) {
      numberOfHits += 1;
    }
  }
  for (let posicaoInternaTwo = 0; posicaoInternaTwo < secondPlay.length; posicaoInternaTwo += 1) {
    if (megaSenaNumbers[posicao] === secondPlay[posicaoInternaTwo]) {
      numberOfHits += 1;
    }
  }
}

console.log("Números sorteados: " + megaSenaNumbers);
console.log("Nossa tentativa 1: " + firstPlay);
console.log("Número de acertos 1: " + numberOfHits);
console.log("Nossa tentativa 2: " + secondPlay);
console.log("Número de acertos 2: " + numberOfHits);