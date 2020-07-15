// Utilizando for, descubra qual o menor valor contido no array e imprima-o;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// atribuindo o valor maior dentro do array como 1000

let smallNumber = 1000;

for (let index = 0; index < numbers.length; index++) {
  if (numbers[index] < smallNumber) {
    smallNumber = numbers[index];
  }
}

console.log(smallNumber);