/**
 * CLASES
 * Las clases son plantillas o moldes para crear objetos con una determinada estructura de datos
 * Los datos tendrán una asociación clave-valor
*/


/**
 * Declaracion de una clase Persona que tiene como atributos (variables) un nombre, un apellido y una edad.
 */
class Persona{
  constructor(nombre, apellido, edad){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
  }
}


/**
 * OBJETOS
 * Los objetos son instancias de una clase que tienen la misma estructura
 * pero cada uno de los objetos tiene sus propios valores para sus atributos
*/


/**
 * Instanciación de un objeto de la clase Persona
 * @type {Persona} clase que representa a una persona
 */
const persona1 = new Persona("Pepe", "Martinez", 18);
const persona2 = new Persona("Manuel", "Herrera", 50);

/**
 * ACTUALIZAR VALORES
 * Para actualizar los valores de una instancia podemos acceder al atributo llamando a la variable seguido de un . y el
 * nombre del atributo
 */

persona1.edad = 25;


/**
 * CREACION DE OBJETOS AL VUELO
 * En JavaScript podemos crear un objeto con su propia estructura de datos sin necesidad de declarar una clase antes
 * Esta es la forma más dinámica de crear un objeto y asignaremos los clave-valor mediante :
 *
 * Esta estructura de datos es la misma que un JSON (JavaScript Object Notation)
 */

const perro = {
  nombre: "Rocky",
  edad: 3,
  raza: "Bretón"
};

// podemos actualizar los datos de la misma manera
perro.edad = 4;
