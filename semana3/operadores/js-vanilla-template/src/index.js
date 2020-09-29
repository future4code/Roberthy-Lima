// EXERCÍCIO 1

const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)
// a. false
resultado = bool1 && bool2 && bool3
console.log("b. ", resultado)
// b. false
resultado = !resultado && (bool1 || bool1)
console.log("c. ", resultado)
// c. true
console.log("e. ", typeof resultado)
// e. boolean


// EXERCÍCIO 2 


let array
console.log('a. ', array)
// a. undefined
array = null
console.log('b. ', array)
// b.null
array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)
// c. 11
let i = 0
console.log('d. ', array[i])
// d. 3
array[i+1] = 19
console.log('e. ', array)
// e.[3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
const valor = array[i+6]
console.log('f. ', valor)
// f.9

// EXERCÍCIO 3

