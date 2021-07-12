let myString = "freeCodeCamp";
let myString2 = "freeCodeCAMP";
let fccRegex = /freecodecamp/i; // El i al final de la expresión se llama flag y se usa para ignorar la 
console.log("El resultado de ambos strings con la expresión 'no casa sensitive'", fccRegex.test(myString), fccRegex.test(myString2));