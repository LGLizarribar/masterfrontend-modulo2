console.log("************** DELIVERABLE 02 *********************");

/**
 * 2. Concat
 * Implementa una función concat (inmutable) tal que, dados 2 arrays como entrada, devuelva la concatenación de ambos. Utiliza rest / spread operators.
 */

type ConcatFunction = <A, B>(a: A[], b: B[]) => (A|B)[];

const concat: ConcatFunction = (a, b) => [...a, ...b];

console.log(concat<string, number>(['patata', 'pepe', 'gatito'], [1, 2, 3]));


/**
 * Opcional
 * Implementa una nueva versión de concat donde se acepten múltiples arrays de entrada (más de 2). No utilices el método Array.prototype.concat.
 */

type ConcatMoreFunction = (...rest: Array<Array<unknown>> ) => unknown[];

const concatMore: ConcatMoreFunction = (...rest) => {

    //Alternative way with for of loop using previous concat function
    let newLoopArray: unknown[] = [];
    for (const subArray of rest) {
        newLoopArray = concat(newLoopArray, subArray);
    }
    
    //Alternative using map function within a map function
    const newMapArray: unknown[] = [];
    rest.map((inputArray: unknown[]) => inputArray.map((item: unknown) => newMapArray.push(item)));
    console.log(newMapArray);

    // Alternative way with flat function
    console.log(rest.flat())
    
    return newLoopArray;
};

console.log(concatMore(['patata', 'pepe', 'gatito'], [1, 2, 3], ['pata', 'paco', 'miau'], [5, 6, 7]));
console.log(concatMore([]));