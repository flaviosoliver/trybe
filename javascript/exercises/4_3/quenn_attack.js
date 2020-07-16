//Ataque da Rainha no xadrez

let posicaoRainhaLinha = 4;
let posicaoRainhaColuna = 4; 

let posicaoPecaLinha = 1;
let posicaoPecaColuna = 7;

let ataqueBemSucedido = false;

// Verificando o ataque na horizontal
if (posicaoRainhaLinha === posicaoPecaLinha) {
  ataqueBemSucedido = true;
}

// Verificando o ataque na vertical
if (posicaoRainhaLinha === posicaoPecaColuna) {
  ataqueBemSucedido = true;
}


// Diagonal superior direita
for (let i = 1; i < 8; i +=1) {
  let linhaRainha = posicaoRainhaLinha + i;
  let colunaRainha = posicaoRainhaColuna + i;

  if(linhaRainha > 8 || colunaRainha > 8) {
    // console.log("Encontrou na condição de parada")
    break;
  }

  if (linhaRainha === posicaoPecaLinha && colunaRainha === posicaoPecaColuna) {
    // console.log("Encontrou diagonal superior direita")
    ataqueBemSucedido = true;
    break;
  }
}


// Diagonal inferior direita
for (let i = 1; i < 8; i +=1) {
  let linhaRainha = posicaoRainhaLinha - i;
  let colunaRainha = posicaoRainhaColuna + i;

  if(linhaRainha < 1 || colunaRainha > 8) {
    // console.log("Encontrou na condição de parada")
    break;
  }

  if (linhaRainha === posicaoPecaLinha && colunaRainha === posicaoPecaColuna) {
    // console.log("Encontrou diagonal superior direita")
    ataqueBemSucedido = true;
    break;
  }
}


// Diagonal superior esquerda
for (let i = 1; i < 8; i +=1) {
  let linhaRainha = posicaoRainhaLinha + i;
  let colunaRainha = posicaoRainhaColuna + i;

  if(linhaRainha > 8 || colunaRainha > 8) {
    // console.log("Encontrou na condição de parada")
    break;
  }

  if (linhaRainha === posicaoPecaLinha && colunaRainha === posicaoPecaColuna) {
    // console.log("Encontrou diagonal superior direita")
    ataqueBemSucedido = true;
    break;
  }
}





console.log(ataqueBemSucedido);