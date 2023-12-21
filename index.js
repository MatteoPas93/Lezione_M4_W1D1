// !ESERCIZIO 1

const numeri = function (num1, num2) {
  if (num1 === 50 || num2 === 50 || num1 + num2 === 50) {
    return true;
  } else {
    return false;
  }
};
console.log(numeri(25, 25));

// !ESERCIZIO 2


let stringaCompleta = "Rimuovi carattere";
let stringaCompleta2 = "Carattere"
let carattereDaRimuovere = 4;

const rimuoviCarattere = function (stringa, posizione) {
  if (posizione <= 0 || posizione >= stringa.length) {
  }
  // Creo una stringa unendo la stringa originale e quella con la posizione specificata.
  return stringa.slice(0, posizione) + stringa.slice(posizione + 1);
};

let stringaModifica = rimuoviCarattere(stringaCompleta, carattereDaRimuovere);
console.log(stringaModifica);

// !ESERCIZIO 3

const numeriCompresi = function (num1, num2) {
  if (
    (num1 >= 40 && num1 <= 60) ||
    (num2 >= 40 && num2 <= 60) ||
    (num1 >= 70 && num1 <= 100) ||
    (num2 >= 70 && num2 <= 100)
  ) {
    return true;
  } else {
    return false;
  }
};
console.log(numeriCompresi(45, 70));

// !ESERCIZIO 4

let city1 = "Los Angeles";
let city2 = "New York";
let city3 = "Rome";
let city4 = "Parigi";

const city = function (cityName) {
  if (
    cityName.toLowerCase().startsWith("los") ||
    cityName.toLowerCase().startsWith("new")
  ) {
    return cityName;
  } else {
    return false;
  }
};

console.log(city(city2));

// !ESERCIZIO 5

const numeriArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const totale = function (array) {
  let somma = 0;
  for (let i = 0; i < array.length; i++) {
    somma += array[i];
  }
  return somma;
};

console.log(totale(numeriArray));

// !ESERCIZIO 6

const array1 = [1, 2, 3, 4];
const array2 = [2 - 4 - 5 - 6];
const array3 = [2, 3, 4, 5];

const controllaNumeri = function (array) {
  if (array.includes(1) || array.includes(3)) {
    return false;
  } else {
    return true;
  }
};

console.log(controllaNumeri(array3));

// !ESERCIZIO 7

let angolo1 = 90;
let angolo2 = 180;
let angolo3 = 120;
let angolo4 = 60;

const gradiAngolo = function (gradi) {
  if (gradi < 90) {
    return "Angolo acuto";
  }
  if (gradi > 90 && gradi < 180) {
    return "Angolo ottuso";
  }
  if (gradi === 90) {
    return "Angolo retto";
  } else gradi === 180;
  {
    return "Angolo piatto";
  }
};

console.log(gradiAngolo(angolo4));


// !ESERCIZIO 8

let provaAcronimo = "Croce Rossa Italiana"
let provaAcronimo2 = "Fabbrica Italiana Automobili Torino"

const acronimi = function (acronimo) {
  let frase = acronimo.split(" ")
  for (let i = 0; i < frase.length; i++) {
    frase[i] = frase[i].charAt(0)
  }
  return frase.join("")
}

console.log(acronimi(provaAcronimo));




// !ESERCIZI EXTRA

// !ESERCIZIO 1

let parolaCarattere = "sessantasette";

const contaCaratteri = function (conteggio) {};

// !ESERCIZIO 2

let anagramma1 = "sopra";
let anagramma2 = "spora";
let anagramma3 = "sotto";

const cercaAnagrammi = function (primoAnagramma, secondoAnagramma) {
  const primaParola = primoAnagramma.toLowerCase().split("").sort().join("");
  const secondaParola = secondoAnagramma.toLowerCase().split("").sort().join("");
  if (primaParola === secondaParola) {
    return true + ": queste due parole sono anagrammi";
  } else {
    return false + ": queste due parole non sono anagrammi";
  }
};

console.log(cercaAnagrammi(anagramma3, anagramma2));

// !ESERCIZIO 3

const parolaDaCercare = "sopra";
const anagrammi = [
  "parso",
  "prosa",
  "aspro",
  "sparo",
  "ciao",
  "spora",
  "sotto",
  "alto",
];

const sonoAnagrammi = function (parola, anagramma) {
  // Confronto se due parole sono anagrammi
  const primaParola = parola.split("").sort().join("");
  const secondaParola = anagramma.split("").sort().join("");
  return primaParola === secondaParola;
};

const trovaAnagrammi = function (parola, listaAnagrammi) {
  // Gli anagrammi corretti vengono inseriti nella lista
  return listaAnagrammi.filter((anagramma) => sonoAnagrammi(parola, anagramma));
};

const risultato = trovaAnagrammi(parolaDaCercare, anagrammi);
console.log(risultato);

// !ESERCIZIO 4

let esempio1 = "otto";
let esempio2 = "casa";
let esempio3 = "radar";

const parolaPalindroma = function (stringa) {
  // converto la stringa in minuscolo per evitare problemi di formattazione
  const stringaFormattata = stringa.toLowerCase();

  // Confronto la stringa originale con quella invertita
  const stringaInvertita = stringaFormattata.split("").reverse().join("");
  return stringaFormattata === stringaInvertita;
};

// Esempio di utilizzo

console.log(parolaPalindroma(esempio3));

//   !ESERCIZIO 5

let primoNumero = 110;
let secondoNumero = 281;

const invertiNumero = function (inverti) {
  const stringaNumero = inverti.toString();

  // Inverto l'ordine delle cifre e le ricompongo in un numero
  const numeroInvertito = parseInt(stringaNumero.split("").reverse().join(""));
  return numeroInvertito;
};

console.log(invertiNumero(secondoNumero));

// !ESERCIZIO 7

let stringaReverse1 = "Contrario";
let stringaReverse2 = "Pianeta";

const reverse = function (contrario) {
  const contrarioStringa = contrario.toLowerCase().split("").reverse().join("");
  return contrarioStringa;
};

console.log(reverse(stringaReverse2));


// !ESERCIZIO 8


const esempioArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const lunghezzaY = 4;

const dividiInSottoArray = function (array, Y) {
  // Verifica che Y sia maggiore di 0
  if (Y <= 0) {
      return "La lunghezza Y deve essere maggiore di 0";
  }

  const sottoArray = [];
  let index = 0;

  while (index < array.length) {
      sottoArray.push(array.slice(index, index + Y));
      index += Y;
  }

  return sottoArray;
}


const results = dividiInSottoArray(esempioArray, lunghezzaY);
console.log(results);

