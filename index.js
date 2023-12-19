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

// const rimuoviCarattere = function () {

// }

let stringaNormale = "Carattere";
let carattereDaRimuovere = 4;

const rimuoviCarattere = function (stringa, posizione) {
  if (posizione <= 0 || posizione >= stringa.length) {
  }
  // Creo una stringa unendo la stringa originale e quella con la posizione specificata.
  return stringa.slice(0, posizione) + stringa.slice(posizione + 1);
};

let stringaModifica = rimuoviCarattere(stringaNormale, carattereDaRimuovere);
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

const numeriArray = [1,2,3,4,5,6,7,8,9,10]


const totale = function (array) {
    let somma = 0
    for (let i = 0; i < array.length; i++) {
        somma += array[i]
    }
    return somma
}

console.log(totale(numeriArray));


// !ESERCIZIO 6

const array1 = [1,2,3,4]
const array2 = [2-4-5-6]

const controllaNumeri = function(array) {
   if (array.includes(1) || array.includes(3)) {
    return false
   } else {
    return true
   }
}

console.log(controllaNumeri(array2));


// !ESERCIZIO 7


let angolo1 = 90
let angolo2 = 180
let angolo3 = 120
let angolo4 = 60


const gradiAngolo = function (gradi) {
    if (gradi < 90) {
        return "Angolo acuto"
    } if (gradi > 90 && gradi < 180 ) {
        return "Angolo ottuso"
    } if (gradi === 90) {
        return "Angolo retto"
    } else (gradi === 180); {
        return "Angolo piatto"
    }
}

console.log(gradiAngolo(angolo4));



// !ESERCIZI EXTRA
// !ESERCIZIO 1


