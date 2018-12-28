/**
 * LISTADOS
 * Los listados son agrupaciones dinámicas de variables
 * Como JavaScript es dinámico, estas variables pueden ser de cualquier tipo
*/

// inicialización de un listado vacio
const listado = [];

/**
 * AÑADIR A UN LISTADO
 * Para añadir elementos usaremos el metodo .push()
 */
// creo una variable string
const nombre = "Pepe";
// añado la variable al listado
listado.push(nombre);

/**
 * BORRADO DE UN ELEMENTO DEL LISTADO
 * Para borrar la variable primero necesito el indice
 * porque el metodo splice() tiene dos argumentos -> indice donde empezar a eliminar, cantidad de elementos a eliminar
 */
const indice = listado.indexOf(nombre);
listado.splice(indice, 1); // borrado que empieza en el indice de "Pepe" y elimina un elemento

/**
 * FILTRADO DE RESULTADOS
 * Para filtrar resultados podemos usar el método .filter() que dentro aceptará como argumento una funcion
 * .filter() es lo mismo que recorrer el listado con un for y dentro poner un if donde si cumple la condicion
 * se añade a un nuevo listado
 * El método filter nos devolverá una variable de tipo listado que contenga los resultados de este filtro
 */
const listado2 = ["Pepe", "Juan"];
const filtrados = listado2.filter(function(elemento){
    return elemento === "Juan";
});


// usando lambdas
const filtrados2 = listado2.filter(elemento => elemento === "Juan");

/**
 * MAPEAR ELEMENTOS
 * Para transformar los elementos de un listado en otro formato se puede utilizar el metodo .map()
 * .map() es lo mismo que recorrer el listado con un for, aplicar un nuevo formato y añadir a un nuevo listado
 * El método map nos devolverá una variable de tipo listado que contenga los resultados de este mapeo
 */
listado2.map(function(elemento){
  return `<p>${elemento}</p>`;
});

// usando lambdas
listado2.map(elemento => `<p>${elemento}</p>`);


/**
 * CONCATENAR FILTER Y MAP
 * Podemos utilizar filter y map para crear funciones muy potentes donde solo mapeamos los elementos que cumplan la condicion
 */

listado2.filter(elemento => elemento === "Juan")
        .map(filtrado => `<p>${filtrado}</p>`);
