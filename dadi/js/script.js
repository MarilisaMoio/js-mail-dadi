//tirare un dado da 1 a 6 sia per l'utente che per il pc e decretare chi ha vinto

//ottieni i due numeri
const playerNumber = Math.floor(Math.random() * 6 + 1);

const opponentNumber = Math.floor(Math.random() * 6 + 1);

//definire il vincitore
let message = "Pari!";

if (playerNumber > opponentNumber){
    message = "Hai vinto!"
} else if (playerNumber < opponentNumber){
    message = "Hai perso!"
}

console.log(playerNumber, opponentNumber, message)