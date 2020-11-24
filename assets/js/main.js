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
while (arrayUtente.length < 16) {
  var numeroUtente = Number(prompt("Inserisci un numero da 1 a 100"));
  // L’utente non può inserire più volte lo stesso numero.
  if(arrayUtente.indexOf(numeroUtente) === -1) {
    arrayUtente.push(numeroUtente);
  } else {
    alert("Questo numero è già stato inserito. Scrivi un altro numero da 1 a 100");
  }
}
console.log(arrayUtente);



// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
