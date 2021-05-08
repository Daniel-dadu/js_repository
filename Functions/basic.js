// En JS es posible anidar funciones dentro de otras
// Y también llamar las funciones encima de ellas

console.log(sumaCuadrados(10,5));

function sumaCuadrados(n1, n2) {
    
    function cuadrado(n) {
        return n * n;
    }

    return cuadrado(n1) + cuadrado(n2);
}

// console.log(cuadrado(6)); // Esto no es posible ya que la función "cuadrado" es privada