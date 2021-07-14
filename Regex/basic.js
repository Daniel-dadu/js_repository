let myString = "freeCodeCamp";
let myString2 = "freeCodeCAMP";
let fccRegex = /freecodecamp/i; // El i al final de la expresión se llama flag y se usa para ignorar la 
console.log("El resultado de ambos strings con la expresión 'no casa sensitive'", fccRegex.test(myString), fccRegex.test(myString2));

let testStr = "Repeat, repeat, REPEAT";
let ourRegex = /Repeat/gi; // La flag 'g' es de Global y la i para case insesitive
let result = testStr.match(ourRegex);
console.log("\nAl usar match (y mientras la expresión regular tenga la g al final) obtienes esto:", result);

let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/; // Change this line
let myOtherRegex = /<.*>/;
console.log("\nLa primera expresión con el '?' (lazy matching) regresa esto: ", text.match(myRegex)[0]); 
console.log("La segunda expresión solo regresa esto: ", text.match(myOtherRegex)[0]); 

let firstString = "Ricky is first and can be found.";
let notFirst = "You can't find Ricky now.";
let firstRegex = /^Ricky/;
console.log("\nAl poner el símbolo '^' al principio de una expresión y fuera de los corchetes, busca la expresión al principio del string:");
console.log("En el primer string se obtiene un", firstRegex.test(firstString), ", mientras que en el segundo nos regresa un", firstRegex.test(notFirst));