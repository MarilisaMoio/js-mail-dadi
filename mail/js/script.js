//chiedere all'utente una mail, verificare se sia presente nel nostro """database""" e fornire una rispostag

//creare il nostro """database"""
const mailDatabase = ["moiomarilisa@gmail.com", "filippo.noto.rm@gmail.com", "pippofranco@libero.it", "francocalifano@hotmail.com", "brendan.eich@brave.com", "tim.berners-lee@icloud@com", "pinco.panco@alice.it", "panco.pinco@alice.it",]

//strutturare l'evento click
const emailButton = document.querySelector("#email-button");

emailButton.addEventListener ("click", function (){
    //variabile flag
    let findEmail = false;

    //recuperare la mail e metterla in minuscolo (siamo buoni dai)
    const userEmail = document.querySelector("#user-email").value.toLowerCase();

    //cercare la mail
    for (let i = 0; i < mailDatabase.length; i++){
        if (userEmail === mailDatabase[i]){
            findEmail = true;
        }
    }

    //fornire la risposta
    if (findEmail === true){
        alert("Accesso effettuato!")
    } else {
        alert("Impossibile accedere: la tua mail non è stata trovata nel sistema.")
    }
})

