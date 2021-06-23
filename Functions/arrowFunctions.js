// Sintaxis de las arrow functions en Javascript (Funciones flecha XD)

//Syntax
var funcion = (param1, param2) => { statements }
var funcion = (param1, param2) => expression; // IMPORTANTE: Cuando solo hacen un return, se puede poner así
var funcion = (param1, param2) => { return expression; }

var funcion = (singleParam) => { statements }
var funcion = singleParam => { statements } // IMPORTANTE: Cuando solo reciben un parametro, este puede ir sin paréntesis

var funcion = () => { statements } // No parameters
var funcion = () => expression; // No parameters
var funcion = () => { return expression; } // No parameters

var funcion = (param1, param2, paramN) => expression; // Multiple parameters

// NORMAL FUNCTION EXAMPLE
var multiply = function(x, y) {
    return x * y;
}; 

// ARROW FUNCTION EXAMPLE
var multiply = (x, y) => { return x * y };
// or  
var multiply = (x, y) => x*y;


// -------------------Complex Example------------------- //
var materials = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
];

var materialsLength1 = materials.map(function(material) { 
    return material.length;
});

var materialsLength2 = materials.map((material) => {
    return material.length;
});

var materialsLength3 = materials.map(material => material.length);

// Fuente: https://youtu.be/22fyYvxz-do


// Funciones que no reciben parámetros: Se le puede asignar valores por defecto a los parámetrs que no se reciben
const misDatos = (name = "anonimo", edad = 0) => "Yo me llamo " + name + " y tengo " + edad + " años.";

console.log("Función con parametros predeterminados: ");
console.log(misDatos("daniel", 19));
console.log(misDatos());


// Rest Parameter: Permite recibir cualquier cantidad de parámetros (del tipo de dato que sean) y emplearlos
// Todos los parámetros se convierten en un array
const howMany = (...args) => "You have passed " + args.length + " arguments.";

console.log("\nFunción con parametros Rest: ");
console.log(howMany(0, 1, 2));
console.log(howMany("string", null, [1, 2, 3], { }));