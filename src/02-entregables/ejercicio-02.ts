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
    const newArray = [];
    rest.map(inputArray => inputArray.map(item => newArray.push(item)));
    return newArray;
};

console.log(concatMore(['patata', 'pepe', 'gatito'], [1, 2, 3], ['patata', 'pepe', 'gatito'], [1, 2, 3]));
console.log(concatMore([]));