let myString = "freeCodeCamp";
let myString2 = "freeCodeCAMP";
let fccRegex = /freecodecamp/i; // El i al final de la expresión se llama flag y se usa para ignorar la 
console.log("El resultado de ambos strings con la expresión 'no casa sensitive'", fccRegex.test(myString), fccRegex.test(myString2));

let testStr = "Repeat, repeat, REPEAT";
let ourRegex = /Repeat/gi; // La flag 'g' es de Global y la i para case insesitive
let result = testStr.match(ourRegex);
console.log("Al usar match (y mientras la expresión regular tenga la g al final) obtienes esto:", result);