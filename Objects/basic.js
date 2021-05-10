var myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"],
    "bark": "woof"
};

console.log("Objeto perro: ")
console.log(myDog);

// Modificando sus valores:
myDog.tails = 4;
myDog["friends"].push("Pancho");

console.log("\nObjeto perro modificado: ")
console.log(myDog);

// Add atributes
myDog.food = "Purina";

// Delete atributes
delete myDog.bark;

console.log("\nObjeto perro al final: ")
console.log(myDog);

console.log("\nCheck if myDog has a legs property: " + myDog.hasOwnProperty("legs")); 
