console.log("************** DELIVERABLE 02 *********************");

/**
 * 2. Concat
 * Implementa una función concat (inmutable) tal que, dados 2 arrays como entrada, devuelva la concatenación de ambos. Utiliza rest / spread operators.
 */

const concat = (a: any[], b: any[]) => {
    const concatArray = [...a, ...b]
    return concatArray;
};

console.log(concat(['patata', 'pepe', 'gatito'], [1, 2, 3]));


/**
 * Opcional
 * Implementa una nueva versión de concat donde se acepten múltiples arrays de entrada (más de 2). No utilices el método Array.prototype.concat.
 */

const concatMore = (...rest: any[]) => {

    //Alternative way with for of loop using previous concat function
    let newLoopArray = [];
    for (const subArray of rest) {
        newLoopArray = concat(newLoopArray, subArray);
    }
    
    //Alternative using map function within a map function
    const newMapArray = [];
    rest.map(inputArray => inputArray.map(item => newMapArray.push(item)));
    console.log(newMapArray);

    // Alternative way with flat function
    console.log(rest.flat())
    
    return newLoopArray;
};

console.log(concatMore(['patata', 'pepe', 'gatito'], [1, 2, 3], ['pata', 'paco', 'miau'], [5, 6, 7]));
console.log(concatMore([]));