const uno = "parole";
const due = "polare";


let stringa1 = uno.toLowerCase();
let stringa2 = due.toLowerCase();

let array1 = [...stringa1];
let array2 = [...stringa2];

array1.sort();
array2.sort();
console.log(array1, array2)

let parola1 = array1.toString();
let parola2 = array2.toString();

console.log(parola1);
console.log(parola2);



function textCheck (){
    if (parola1 === parola2){
        console.log("Funziona! Le due parole potrebbero essere anagrammabili");
    } else {
        console.log("Errore: le due parole non sono anagrammabili")
    }
}


textCheck();