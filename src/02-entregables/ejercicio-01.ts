console.log("************** DELIVERABLE 01 *********************");

/**
 * 1. Array operations
 */

/**
 * Head
 * Implementa una función head (inmutable), tal que, dado un array como entrada extraiga y devuelva su primer elemento. Utiliza destructuring.
 */

const head = (array: any[]) => {
    const [firstItem] = array;
    console.log(firstItem);
    return firstItem;
};

head(['patata', 1, {}]);


/**
 * Tail
 * Implementa una función tail (inmutable), tal que, dado un array como entrada devuelta todos menos el primer elemento. Utiliza rest operator.
 */

const tail = (array: any[]) => {
    const [_firstItem, ...restOfItems] = array;
    console.log(restOfItems);
    return restOfItems;
};

tail(['patata', 1, {}]);

/**
 * Init
 * Implementa una función init (inmutable), tal que, dado un array como entrada devuelva todos los elementos menos el último. Utiliza los métodos que ofrece Array.prototype.
 */

const init = (array: any[]) => {
    array.pop();
    console.log(array);
    return array;
};

init(['patata', 1, {}]);

/**
 * Last
 * Implementa una función last (inmutable), tal que, dado un array como entrada devuelva el último elemento.
 */

const last = (array: any[]) => {
    const lastItem = array.pop();
    console.log(lastItem);
    return lastItem;
};

last(['patata', 1, {}]);