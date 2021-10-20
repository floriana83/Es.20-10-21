let str = prompt("Inserisci 5 nomi separati da una virgola", 'Stefania,Sandro,Maria,Giacomo,Giorgia');


//   NOMI

let arr = str.split(',')

let result1 = arr.splice (3, 1, 'Marta');

arr.unshift('Giacomo');

arr.push('Franco', 'Valentina'); 


// ETA'

let arrAge = [32, 21, 47, 12, 78];

let result2 = arrAge.splice (3, 1, 6);

arrAge.unshift(12);

arrAge.push(54, 32); 

// Unione e Console.log

let unione =[arr, arrAge];

console.log(unione)

