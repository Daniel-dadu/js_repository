const result = require("./export1");

console.log("---------- Result for the first require: ----------");

console.log(result.me);
console.log(result.you);
console.log(result.object);

console.log(result.theFunc("Alejo"));

console.log("\n---------- Result for the second require: ----------");

require("./export2");