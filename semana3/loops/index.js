// EXERCÍCIO 1

// let valor = 0
// for(let i = 0; i < 5; i++) {
//   valor += i
// }
// console.log(valor)

// RESPOSTA: Ta somando todos os numeros de 1 a 4, vai retornar ''10''.


// EXERCICIO 2

// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
//   if (numero > 18) {
// 		console.log(numero)
// 	}
// }

// RESPOSTA: Vai exibir todos os números maior que 18 do array. b): Sim, precisaria criar uma vvariavel pro indice.


// EXERCÍCIO 3

let arrayOriginal = [1,2,3,4,5,6,7,8,10,23,25]

// A):
// for (number of arrayOriginal) {
//     console.log(number)
// }


// B):
// for (number of arrayOriginal) {
//     console.log(number/10)
// }

// C):
// let newArray = []
// for (number of arrayOriginal) {
//     if (number % 2 == 0) {
//         newArray.push(number)
//     }
// }
// console.log(newArray)

// D):
// let index = 0
// while (index < arrayOriginal.length) {
//     console.log("O elemento do índex " + index + " é: " + arrayOriginal[index]);
//     index++
// }

// E):
let maiorNumero = arrayOriginal[0]
for (numero of arrayOriginal) {
    if (numero > maiorNumero){
        maiorNumero = numero
    }
}

console.log("O maior número é: " + maiorNumero)

let menorNumero = arrayOriginal[0]
for (numero of arrayOriginal) {
    if(numero < menorNumero) {
        menorNumero = numero
    }
}
console.log("O menor número é: " + menorNumero)