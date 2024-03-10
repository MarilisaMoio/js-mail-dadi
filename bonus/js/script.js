//bottone di trigger del gioco
const playBtn = document.querySelector("#play-btn");

//i due "dadi"
const playerDice = document.querySelector("#player-dice");

const opponentDice = document.querySelector("#opponent-dice");

//le due coppie di array per ciclare l'apparizione dei dadi
const diceArray = [playerDice, opponentDice];

const numbers = [0, 0];

//i counter
const counterPhrase = document.querySelector("#game-counter");

let gamesCounter = 0;

let loseStreakCounter = 0;

//avvio partita
playBtn.addEventListener ("click", function(){
    //ciclo per l'utente e per il pc
    for (i = 0; i < diceArray.length; i++){
        //identificazione del numero
        numbers[i] = Math.floor(Math.random() * 6 + 1);

        //assegnazione dell'icona corrispondente
        if (numbers[i] === 1){
            diceArray[i].className = "fa-solid fa-6x fa-dice-one";
        } else if (numbers[i] === 2){
            diceArray[i].className = "fa-solid fa-6x fa-dice-two";
        } else if (numbers[i] === 3){
            diceArray[i].className = "fa-solid fa-6x fa-dice-three";
        } else if (numbers[i] === 4){
            diceArray[i].className = "fa-solid fa-6x fa-dice-four";
        } else if (numbers[i] === 5){
            diceArray[i].className = "fa-solid fa-6x fa-dice-five";
        } else if (numbers[i] === 6){
            diceArray[i].className = "fa-solid fa-6x fa-dice-six";
        }
    }

    //costruzione del messaggio di risultato e conseguente modifica del bottone
    const message = document.querySelector("#message");

    if (numbers[0] > numbers[1]){
        message.className = "green";
        message.innerHTML = "Hai vinto!";
        console.log("Hai vinto!");
        playBtn.innerHTML = "gioca ancora";
        loseStreakCounter = 0;
    } else if (numbers[1] > numbers[0]){
        message.className = "red";
        message.innerHTML = "Hai perso";
        playBtn.innerHTML = "riprova";
        loseStreakCounter += 1;
    } else {
        message.removeAttribute("class");
        message.innerHTML = "Pari!";
        playBtn.innerHTML = "gioca ancora";
        loseStreakCounter = 0;
    }

    //aggiornamento del counter delle partite
    gamesCounter += 1;

    counterPhrase.innerHTML = `Partite giocate: ${gamesCounter}`;

    //messaggio in caso di streak di sconfitte
    if (loseStreakCounter === 3){
        alert("Non è giornata");
    }
})