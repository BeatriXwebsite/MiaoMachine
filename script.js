// decido i simboli da visualizzare
const simboli =  [
  '😺',
  '😻',
  '😽',
  '😿',
  // '😾',
  // '😹',
  // '😼'
];

// determino la situazione di partenza con la stessa emoji
const slots = {
  slot1 : document.getElementById('slot-1').innerHTML = simboli[2],
  slot2 : document.getElementById('slot-2').innerHTML = simboli[2],
  slot3 : document.getElementById('slot-3').innerHTML = simboli[2]
}

// accedo agli elementi del DOM
const esito = document.getElementById('esito');
const modal = document.getElementById('modal');
const btn = document.querySelector('#button');

// listener su tasto R per ricaricare la pagina 
document.addEventListener('keydown', function(e){
  if(e.code === 'KeyR'){
    this.location.reload();
  }
})

// funzione che restituisce un sibmolo random per ogni slot rispettivamente dopo 100, 200 e 300 millisecondi
function game(){
  esito.innerHTML = '';
  btn.disabled = true;
  const giriSlot = numFrames(10, 10);

  for (let i = 1; i <= 3; i++) {
    let slot = 0;
    let scelta = setInterval(function() {
      let rdm = random(simboli.length);
      document.getElementById('slot-' + i).innerHTML = simboli[rdm];
      slot++;
      if (slot === giriSlot) {
        clearInterval(scelta);
        if (i === 3) {
          btn.disabled = false;
          showResult();
        }
      }
    }, i * 100);
  }
}

// mostra l'esito della giocata
function showResult(){  
  let scelta1 = document.getElementById('slot-1').innerHTML;
  let scelta2 = document.getElementById('slot-2').innerHTML;
  let scelta3 = document.getElementById('slot-3').innerHTML;

  if(scelta1 === scelta2 && scelta2 === scelta3){
    btn.disabled = true;
    showModal();
  }else{
    esito.innerHTML = randomFrase();
  }
}

// in caso di esito giocata negativo, genera un messaggio da restituire 
function randomFrase(){
  const messaggi = [
    'Patetico umano...',
    'Pulisci la mia lettiera, schiavo...',
    'Ti sto ignorando...',
    'Non toccarmi umano!',
    `Don't touch my belly!`,
    'Cibami umano...',
    'Ti mangio tutte le piante...',
    'Mi faccio le unghie sul tuo divano...',
    'Non toccare i miei cuscinetti!',
    'Niente baci!',
    'Parkour!!!',
    'Sputo palle di pelo ovunque...',
    'Lascia stare la mia coda!',
    'Attacco a sorpresa!',
    'Say my name...',
    'Correrò per tutta casa stanotte...',
    'Non ti faccio dormire...',
    'Le candele...',
    `Ringrazia che non ti faccio pagare l'affitto...`,
    'Mi coccoli quando te lo dico io!'
  ];

  const randFrase = random(messaggi.length);
  return messaggi[randFrase];
}

// in caso di vittoria, mostra la modale
function showModal(){
  let response = document.createElement('h1');

  modal.style.display = 'flex';
  response.innerHTML = '🙀 hai vinto! 🙀';
  response.classList.add('response');

  modal.append(response);
}

// funzione che restituisce un numero casuale compreso tra i valori specificati
function numFrames(min, max){
	return random(max-min + 1) + min;
}

// funzione che restituisce un numero casuale. Da riutilizzare per tutto il codice
function random(num){
  return Math.floor(Math.random() * num);
}