/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

let cartas = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10 ,'J' ,'Q' ,'K']
let naipes = ['Espadas', 'Copas', 'Pals', 'Ouros'] 

let carta = cartas[Math.floor(Math.random() * cartas.length)];
let naipe = naipes[Math.floor(Math.random() * naipes.length)];

let carta2 = cartas[Math.floor(Math.random() * cartas.length)];
let naipe2 = naipes[Math.floor(Math.random() * naipes.length)];

let cartaComputador = cartas[Math.floor(Math.random() * cartas.length)];
let naipeComputador = naipes[Math.floor(Math.random() * naipes.length)];

let carta2Computador = cartas[Math.floor(Math.random() * cartas.length)];
let naipe2Computador = naipes[Math.floor(Math.random() * naipes.length)];



let pontuacaoUsuario = 0
let pontuacaoComputador = 0

// CARTAS COMPUTADOR
switch (cartaComputador) {
   case 'A':
      pontuacaoComputador += 11
      break
   case 'J':
      pontuacaoComputador += 10
      break
   case 'Q':
      pontuacaoComputador += 10   
      break
   case 'K':
      pontuacaoComputador += 10
      break
   case 1:
      pontuacaoComputador +=1
      break
   case 2:
      pontuacaoComputador +=2
      break
   case 3:
      pontuacaoComputador +=3
      break
   case 4:
      pontuacaoComputador +=4
      break
   case 5:
      pontuacaoComputador +=5
      break
   case 6:
      pontuacaoComputador += 6
      break
   case 7:
      pontuacaoComputador +=7
      break
   case 8:
      pontuacaoComputador += 8
      break
   case 9:
      pontuacaoComputador +=9
      break
   case 10:
      pontuacaoComputador += 10
      break
   default:
      break
}

switch (carta2Computador) {
   case 'A':
      pontuacaoComputador += 11
      break
   case 'J':
      pontuacaoComputador += 10
      break
   case 'Q':
      pontuacaoComputador += 10   
      break
   case 'K':
      pontuacaoComputador += 10
      break
   case 1:
      pontuacaoComputador +=1
      break
   case 2:
      pontuacaoComputador +=2
      break
   case 3:
      pontuacaoComputador +=3
      break
   case 4:
      pontuacaoComputador +=4
      break
   case 5:
      pontuacaoComputador +=5
      break
   case 6:
      pontuacaoComputador += 6
      break
   case 7:
      pontuacaoComputador +=7
      break
   case 8:
      pontuacaoComputador += 8
      break
   case 9:
      pontuacaoComputador +=9
      break
   case 10:
      pontuacaoComputador += 10
      break
   default:
      break
}

// CARTAS USUARIO
switch (carta) {
   case 'A':
      pontuacaoUsuario += 11
      break
   case 'J':
      pontuacaoUsuario += 10
      break
   case 'Q':
      pontuacaoUsuario += 10   
      break
   case 'K':
      pontuacaoUsuario += 10
      break
   case 1:
      pontuacaoUsuario +=1
      break
   case 2:
      pontuacaoUsuario +=2
      break
   case 3:
      pontuacaoUsuario +=3
      break
   case 4:
      pontuacaoUsuario +=4
      break
   case 5:
      pontuacaoUsuario +=5
      break
   case 6:
      pontuacaoUsuario += 6
      break
   case 7:
      pontuacaoUsuario +=7
      break
   case 8:
      pontuacaoUsuario += 8
      break
   case 9:
      pontuacaoUsuario +=9
      break
   case 10:
      pontuacaoUsuario += 10
      break
   default:
      break
}

switch (carta2) {
   case 'A':
      pontuacaoUsuario += 11
      break
   case 'J':
      pontuacaoUsuario += 10
      break
   case 'Q':
      pontuacaoUsuario += 10   
      break
   case 'K':
      pontuacaoUsuario += 10
      break
   case 1:
      pontuacaoUsuario +=1
      break
   case 2:
      pontuacaoUsuario +=2
      break
   case 3:
      pontuacaoUsuario +=3
      break
   case 4:
      pontuacaoUsuario +=4
      break
   case 5:
      pontuacaoUsuario +=5
      break
   case 6:
      pontuacaoUsuario += 6
      break
   case 7:
      pontuacaoUsuario +=7
      break
   case 8:
      pontuacaoUsuario += 8
      break
   case 9:
      pontuacaoUsuario +=9
      break
   case 10:
      pontuacaoUsuario += 10
      break
   default:
      break
}



function rodada() {
   console.log("Usuário - cartas: " + carta + naipe + " e " + carta2 + naipe2)
   console.log("A pontuação do usúario é: " + pontuacaoUsuario)

   console.log("Computador - cartas: " + cartaComputador + naipeComputador + " e " + carta2Computador + naipe2Computador)
   console.log("A pontuação do computador é: " + pontuacaoComputador)

   // DESAFIO 8
   if(carta=== 'A' && carta2 == 'A' || cartaComputador === 'A' && carta2Computador === 'A') {
      rodada()
   }

   // DESAFIO 9
   if(confirm(
      "Suas cartas são " + carta + naipe + " e " + carta2 + naipe2 + ". A carta revelada do computador é " + cartaComputador + naipeComputador +
      "\n"+  
      "Deseja comprar mais uma carta?"
   )) {

   }


   if(pontuacaoComputador > pontuacaoUsuario) {
      console.log("O computador ganhou!")
   } else if(pontuacaoComputador < pontuacaoUsuario) {
      console.log("O usúario ganhou!")
   } else {
      console.log("Empate!")
   }
   
}

console.log("Bem vindo ao jogo de Blackjack!")

if(confirm("Quer iniciar uma nova rodada?")) {
   rodada() 
} else {
   console.log("O jogo acabou")
}







