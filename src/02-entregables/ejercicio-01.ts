console.log("************** DELIVERABLE 01 *********************");

/**
 * 1. Array operations
 */

/**
 * Head
 * Implementa una función head (inmutable), tal que, dado un array como entrada extraiga y devuelva su primer elemento. Utiliza destructuring.
 */

type HeadFunction = ([firstItem]: unknown[]) => unknown;

const head: HeadFunction = ([firstItem]) => firstItem;

console.log(head(['patata', 12, {gato: "miau"}]));


/**
 * Tail
 * Implementa una función tail (inmutable), tal que, dado un array como entrada devuelta todos menos el primer elemento. Utiliza rest operator.
 */

type TailFunction = ([_firstItem, ...restOfItems]: unknown[]) => unknown[];

const tail: TailFunction = ([_firstItem, ...restOfItems]) => restOfItems;

console.log(tail(['patata', 12, {gato: "miau"}]));

/**
 * Init
 * Implementa una función init (inmutable), tal que, dado un array como entrada devuelva todos los elementos menos el último. Utiliza los métodos que ofrece Array.prototype.
 */

type InitFunction = (array: unknown[]) => unknown[];

const init: InitFunction = (array) => {
    const newArray = array.reduce((acc: unknown[], item, index) => {
        if(index === array.length -1) return acc;
        return [...acc, item];
    },[])

    // alternative way
    const newAlternativeArray = [...array];
    newAlternativeArray.pop();
    console.log(newAlternativeArray);
    
    return newArray as unknown[];
};

console.log(init(['patata', 12, {gato: "miau"}]));

/**
 * Last
 * Implementa una función last (inmutable), tal que, dado un array como entrada devuelva el último elemento.
 */

type LastFunction = (array: unknown[]) => unknown;

const last: LastFunction = (array) => {
    const arrayLength = array.length;
    return array[arrayLength - 1];
};

console.log(last(['patata', 12, {gato: "miau"}]));