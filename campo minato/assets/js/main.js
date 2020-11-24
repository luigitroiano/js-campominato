alert('CAMPO MINATO\n\nREGOLE DEL GIOCO:\nIl computer sceglierà randomicamente 16 numeri (o, "mine") da 1 a 100. Tu dovrai inserire i numeri restanti (84) evitando quindi i numeri generati dal computer (mine). Se riuscirai ad evitare tutte le mine avrai VINTO.\n\nIN CULO ALLA BALENA!\n© Powered by Luigi Troiano');


// Il computer deve generare 16 numeri casuali tra 1 e 100.
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

arrayPc = [];

while(arrayPc.length < 16){
    var numeroPc = getRndInteger(1,100);
    // I numeri non possono essere duplicati
    if(arrayPc.indexOf(numeroPc) === -1) {
      arrayPc.push(numeroPc);
    }
}
console.log(arrayPc);


// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
arrayUtente = [];
while (arrayUtente.length < 84) {
  var numeroUtente = Number(prompt("Inserisci un numero da 1 a 100"));

  // L’utente non può inserire più volte lo stesso numero.
  if(arrayUtente.indexOf(numeroUtente) === -1 && arrayPc.indexOf(numeroUtente) === -1) {
    arrayUtente.push(numeroUtente);
  } else if (arrayUtente.indexOf(numeroUtente) !== -1) {
    alert("Questo numero è già stato inserito. Scrivi un altro numero da 1 a 100");
  }
  // Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
  // La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.

  else {
    alert("GAME OVER. Sei inciampato su una mina! BOOM");
    break;
  }
  if (numeroUtente <= 0 || numeroUtente > 100 ||  isNaN(numeroUtente)) {
    alert("Inserisci un numero valido");
    arrayUtente.pop(numeroUtente);
  }
  if (arrayUtente.length === 84) {
    alert("Hai Vinto! Sei sopravvissuto a tutte le mine.");
  }
}
console.log(arrayUtente);

// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
var score = "Il tuo punteggio è di: " + arrayUtente.length + "/" + "84";

var percentage =  Number(arrayUtente.length/84 * 100);
var percentageFixed = percentage.toFixed(2);
alert(score + "\n" + "\n" + "Percentuale di successo: " + percentageFixed + "%");

var arrayPcOrdered = arrayPc
arrayPcOrdered.sort(function(a, b){return a-b});
alert('Le "mine" erano: ' + arrayPc + "\n" + "\n" + "I tuoi numeri fortunati: " + arrayUtente);

alert("Refresha la pagina per giocare ancora.");
