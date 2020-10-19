//                                                            EXERCICIOS DE LEITURA DE CODIGO

// EXERCICIO 1
// RESPOSTA: Pega o valor da cotação por meio de um prompt, multiplica o valor da cotação pelo valor em dolar e retorna em reais.


// EXERCICIO 2
// RESPOSTA: De acordo com o tipo de investimento escolhido, pega o valor investido e retorna ele com a porcentagem de lucros.
//   O console log do 'novoMontante' irá retornar: 165 , O console log de 'SegundoMontante' irá retornar: Tipo de investimento informado incorreto!


// EXERCICIO 3
// RESPOSTA: Se o número da array 'numeros' for par, ele será adicionado a array1. se for impar será adicionado a array2.
// O primeiro console.log irá retornar "Quantidade total de números 14"; o segundo "8"; o terceiro "6"


// EXERCICIO 4
// RESPOSTA: Vai percorrer todos os numeros da array 'numeros', se o numero da array for menor que a variavel 'numero1', a variavel vai passar a ser esse número.
// Já se o número for maior que a variavel 'numero2', a variavel vai passar a ser esse numero.
// O primeiro console log ira retornar "-10"; o segundo "1590". Resumidamente, numero1 será o menor numero e numero2 o maior.



//                                                            EXERCICIOS DE LOGICA DE PROGRAMAÇÃO

// EXERCICIO 1
// RESPOSTA: forEach, map e filter.
// const array0 = [1, 2, 3, 4]
// array0.forEach(num => console.log(num))


// EXERCICIO 2
// RESPOSTA: A)False.   B)True.     C)False.     D)True.    E)True.


// EXERCICIO 3
// NAO FIZ.


// EXERCICIO 4

// function triangulo() {
//     let a = Number(prompt("Qual a medida do lado A do trangulo?"))
//     let b = Number(prompt("Qual a medida do lado B do trangulo?"))
//     let c = Number(prompt("Qual a medida do lado C do trangulo?"))

//     if (a === b && b === c) {
//         console.log("O triangulo é equilatero!")
//     } else if ( a === b || a === c || b === c ) {
//         console.log("O traingulo é isosceles!")   
//     } else {
//         console.log("O trangulo é escaleno!")
//     } 
// }

// triangulo()


// EXERCICIO 5
// function checkNumber() {
//     let num1 = Number(prompt("Digite um número"))
//     let num2 = Number(prompt("Digite outro número"))

//     if (num1 > num2) {
//         console.log("O maior é:" + num1)
//     } else if (num2 > num1) {
//         console.log("O maior é:" + num2)
//     } else {
//         console.log("Sao iguais!")
//     }

//     if (num1 % num2 === 0) {
//         console.log(num1 +" é divisível por " + num2)
//     } else if (num1 % num2 !== 0) {
//         console.log(num1 +" não é divisível por " + num2)
//     }

//     if (num2 % num1 === 0) {
//         console.log(num2 +" é divisível por " + num1)
//     } else if (num2 % num1 !== 0) {
//         console.log(num2 +" não é divisível por " + num1)
//     }

//     let diferenca = Number(num1 - num2)
//     if (diferenca < 0) { 
//         console.log("A diferença entre eles é " + diferenca * -1)
//     } else {
//         console.log("A diferença entre eles é " + diferenca)
//     } 
// }

// checkNumber()



//                                                            EXERCICIOS DE FUNÇOES

// EXERCICIO 1
// NAO FIZ

// EXERCICIO 2 
// var helloWorld = () => {
//     alert("Hello Labenu")
// }

// helloWorld()


//                                                            EXERCICIOS DE OBJETOS

// EXERCICIO 1
// RESPOSTA: Arrays são variveis ou constantes que armazenam diversos valores. Objetos possuem propriedades.
// Objetos são utilizados quando precisamos da descrição de certo item e precisamos interegair com elas.


// EXERCICIO 2
// function criaRetangulo() {
//     let lado1 = Number(prompt("Digite o tamanho do lado 1"))
//     let lado2 = Number(prompt("Digite o tamanho do lado 2"))

//     let rectangle = {largura: lado1, altura: lado2, perimetro: 2 * (lado1 + lado2), área: lado1 * lado2}
//     console.log(rectangle)
// }

// criaRetangulo()


// EXERCICIO 3
// let favMovie = {
//     title: "Vingadores",
//     year: "2013",
//     directedBy: "Homem-Aranha",
//     actors: ["Homem de Ferro", "Hulk"]
// }

// console.log(`Venha assistir ao filme ${favMovie.title}, de ${favMovie.year}, dirigido por ${favMovie.directedBy} e estrelado por ${favMovie.actors[0]} e ${favMovie.actors[1]}`)


// EXERCICIO 4
// let pessoa = {
//     name: "Nathalia",
//     age: "21",
//     email: "nana@hotmail.com",
//     endereço: "Rua de barro, numero 1234"
// }

// function anonimizarPessoa(x) {

//     anonimo = Object.assign({}, pessoa)

//     anonimo.name = "ANONIMO"

//     console.log(anonimo)
// }
// anonimizarPessoa(pessoa)



//                                                            EXERCICIOS DE FUNÇÕES DE ARRAY

// EXERCICIO 1
// let pessoas = [
// 	{ nome: "Pedro", idade: 20 },
// 	{ nome: "João", idade: 10 },
// 	{ nome: "Paula", idade: 12 },
// 	{ nome: "Artur", idade: 89 } 
// ]

// function pessoasAdultas() {
//     let adultos = []

//     for (pessoa of pessoas) {
//         if (pessoa.idade >= 20) {
//             adultos.push(pessoa)
//         }
//     }
//     console.log(adultos)
// }

// function criancas() {
//     let criancas = []

//     for (pessoa of pessoas) {
//         if (pessoa.idade <= 20) {
//             criancas.push(pessoa)
//         }
//     }
//     console.log(criancas)
// }

// pessoasAdultas()
// criancas()


// EXERCICIO 2
// const array = [1, 2, 3, 4, 5, 6]

// function arrayDouble(x) {
//     const array2 = []

//     for (let i = 0; i < x.length; i++) {
//         array2.push(x[i] * 2)
//     }
//     console.log(array2)
// }   
 
// function arrayTriple(y) {
//     const array3 = []

//     for (let i = 0; i < y.length; i++) {
//         array3.push(String(y[i] * 3))
//     }
//     console.log(array3)
// }

// function evenOrOdd (z) {
//     const array4 = []

//     for (let i = 0; i < z.length; i++) {
//         if (z[i] % 2 == 0) {
//             array4.push(z[i] + " é par")
//         } else if (z[i] % 2 !== 0) {
//             array4.push(z[i] + " é impar")
//         }
//     }
//    console.log(array4)
// }

// arrayDouble(array)
// arrayTriple(array)
// evenOrOdd(array)


// EXERCICIO 3
// const pessoas = [
// 	{ nome: "Paula", idade: 12, altura: 1.8},
// 	{ nome: "João", idade: 20, altura: 1.3},
// 	{ nome: "Pedro", idade: 15, altura: 1.9},
// 	{ nome: "Luciano", idade: 22, altura: 1.8},
// 	{ nome: "Artur", idade: 10, altura: 1.2},
// 	{ nome: "Soter", idade: 70, altura: 1.9}
// ]

// function allowed() {
//     const allowedPerson = []
    
//     for (pessoa of pessoas) {
//         if (pessoa.altura >= 1.5 && pessoa.idade > 14 && pessoa.idade < 60) {
//             allowedPerson.push(pessoa)
//         }
//     }
//     console.log(allowedPerson)
// }

// function notAllowed() {
//     const NotallowedPerson = []
    
//     for (pessoa of pessoas) {
//         if (pessoa.altura < 1.5 || pessoa.idade < 14 || pessoa.idade > 60) {
//             NotallowedPerson.push(pessoa)
//         }
//     }
//     console.log(NotallowedPerson)
// }

// allowed()
// notAllowed()


// EXERCICIO 4
// const consultas = [
// 	{ nome: "João", genero: "masculino", cancelada: true, dataDaConsulta: "01/10/2019" },
// 	{ nome: "Pedro", genero: "masculino", cancelada: false, dataDaConsulta: "02/10/2019" },
// 	{ nome: "Paula", genero: "feminino", cancelada: true, dataDaConsulta: "03/11/2019" },
// 	{ nome: "Márcia", genero: "feminino", cancelada: false, dataDaConsulta: "04/11/2019" }
// ]



// function emailConfirmacao() {
//     let consultasMarcadas = []

//     for (consulta of consultas) {
//         if (consulta.cancelada) {
//             consultasMarcadas.push(`Olá, Sr./Sra.  ${consulta.nome}. Estamos enviando esta mensagem para
//             lembrá-lo / lembrá-la da sua consulta no dia ${consulta.dataDaConsulta}. Por favor, acuse
//             o recebimento deste e-mail.`)
//     }
// }
// console.log(consultasMarcadas)
// }

// function emailCancelamento() {
//     let consultasCanceladas = []

//     for (consulta of consultas) {
//         if (consulta.cancelada) {
//             consultasCanceladas.push(`Olá, Sr./Sra. ${consulta.nome}. Infelizmente, sua consulta marcada
//             para o dia ${consulta.dataDaConsulta} foi cancelada. Se quiser, pode entrar em 
//             contato conosco para remarcá-la`)
//         }
//     }
// console.log(consultasCanceladas)
// }
// emailConfirmacao()
// emailCancelamento()


// EXERCICIO 5
// const contas = [
// 	{ cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
// 	{ cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
// 	{ cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
// 	{ cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
// 	{ cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
// 	{ cliente: "Soter", saldoTotal: 1200, compras: [] }
// ]

// function sum(numbers) {
//     let total = 0
//     for (num in numbers) {
//         total += numbers[num]
//     }
//     return total
// }

// function saldoTotal() {

//     for (conta of contas) {
//         conta.saldoTotal = conta.saldoTotal - sum(conta.compras)
//     }

//     console.log(contas)
// }

// saldoTotal()

