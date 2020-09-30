// EXERCICIO 1

// const respostaDoUsuario = prompt("Digite o número que você quer testar")
// const numero = Number(respostaDoUsuario)

// if(numero % 2 === 0) {
//   console.log("Passou no teste.")
// } else {
//   console.log("Não passou no teste.")
// }
// RESPOSTA: O codigo confere se um número dado pelo usuário é par, caso ele seja par, retorna ''Passou no teste", caso não seja, retorna "Nao passou no teste.

// EXERCICIO 2

// let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
//   case "Laranja":
//     preco = 3.5
//     break;
//   case "Maçã":
//     preco = 2.25
//     break;
//   case "Uva":
//     preco = 0.30
//     break;
//   case "Pêra":
//     preco = 5.5
//     break; // BREAK PARA O ITEM c.
//   default:
//     preco = 5
//     break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)
// RESPOSTA: Quando o cliente diz a fruta desejada, o preço vem automaticamente. B): "O preço da fruta  Maçã  é  R$  2.25" C): Iria exibir o preço do default.

// EXERCICIO 3
// const numero = Number(prompt("Digite o primeiro número."))

// if(numero > 0) {
//   console.log("Esse número passou no teste")
// 	let mensagem = "Essa mensagem é secreta!!!"
// }

// console.log(mensagem)
// RESPOSTA: A): Ta definiundo a constante numero, que será dada pelo usuario.
// B): ''Esse número passou no teste'', caso seja negativo: "mensagem is not defined"
// C): Erro de variavel n definida, pois let esta definida dentro do escopo.

// EXERCÍCIO 4
// let number = Number(prompt("Digite sua idade: "))

// if (number>=18) {
//     console.log("Voce pode dirigir!")
// } else {
//     console.log("Voce nao pode dirigir!")
// }

// EXERCÍCIO 5
// let turno = String(prompt("Digite seu turno (M=matutino, V=vespertino e N=noturno: "))

// if (turno == "M") {
//     console.log("Bom dia!")
// } else if (turno === "V") { 
//     console.log("Boa tarde!")
// } else {
//     console.log("Boa noite!")
// }

// EXERCICIO 6

// let turno = String(prompt("Digite seu turno (M=matutino, V=vespertino e N=noturno: "))
// let saud = ""

// switch (turno) {
//     case "M":
//         saud = "Bom dia!"
//         break;
//     case "N":
//         saud = "Boa noite!"
//         break;
//     default:
//         saud = "Boa tarde!"
//         break;
// }

// console.log(saud)

// EXERCICIO 7

let genero = prompt("QUal o genero do filme?")
let preco = Number(prompt("Qual o preço do ingresso(apenas numeros)?"))

if (genero === "fantasia" && preco <= 15) {
    console.log("Bom filme!")
} else {
    console.log("Escolha outro filme!")
}
