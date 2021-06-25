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

// Make object immutable (can't change)
Object.freeze(myDog);

console.log("\nObjeto perro al final: ")
console.log(myDog);

console.log("\nCheck if myDog has a legs property: " + myDog.hasOwnProperty("legs")); 


const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
};
    
const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES;

console.log("\n---- Destructing an object (similar to pattern matching) ----\nTemperature of today is " + highToday + " and temperature of tomorrow will be " + highTomorrow);

const user = { // Este principio de destruir objetos también aplica para objectos anidados
    johnDoe: { 
      age: 34,
      email: 'johnDoe@freeCodeCamp.com'
    }
};

const { johnDoe: { age: userAge, email: userEmail }} = user;
console.log("John Dow's age is " + userAge + " and Email is " + userEmail);

// Cuando creamos un objeto con una función, podemos usar esta sintaxis para facilitar el proceso: 
console.log("\n > Objecto creado con sintaxis sencilla: ");
const [nameE, ageE, genderE] = ["Daniman", 23, "Masculino"]; // Usamos array destructuring

const createPerson = (name, age, gender) => ({ name, age, gender });

console.log(createPerson(nameE, ageE, genderE));

// -------------------------------------------------
console.log("\n > Funciones dentro de objetos:");

const bicycle = {
    gear: 2,
    brand: "Coca-cola",
    setGear(newGear) { // No es necesario ponerle la palabra clave
        this.gear = newGear;
    },
    setBrand(newBrand) {this.brand = newBrand}
};

bicycle.setGear(4563);
bicycle.setBrand("Toyota");
console.log("The bicycle brand is " + bicycle.brand + " and the gear is " + bicycle.gear);