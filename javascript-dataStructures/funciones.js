/**
 FUNCIONES
 Las funciones son trozos de código que se ejecutarán cuando las invoquemos.
 
 Caracteristicas:
 * Las funciones pueden aceptar uno, varios o ningun parámetro que modificarán el resultado de lo que haga
 * Las funciones pueden devolver un valor aunque no siempre lo hacen
 
 */


/**
 * Declaración de una funcion que no acepta ningun parámetro y no devuelve ningun valor
 */
function f(){
  console.log("Esto es una funcion");
}


/**
 * Declaracion de una funcion que no acepta ningun parametro y que devuelve una variable del tipo String
 * @returns {string}
 */
function crearHelloWorld(){
  const helloWorld = "Hello World";
  return helloWorld;
}

/**
 * Declaracion de una funcion que acepta un parámetro que se le da el valor "nombre" y que no devuelve ningun valor
 * @param nombre String que representa el nombre de una persona
 */
function saludar(nombre){
  console.log("Hola " + nombre);
}

/**
 * Declaracion de una funcion que acepta un parámetro que se le da el valor "nombre" y que devuelve una variable del tipo String
 * @param nombre
 * @returns {string}
 */
function crearSaludo(nombre){
  const saludo = "Hola " + nombre;
  return saludo;
}


/**
 * LAMBDAS // ARROW FUNCTIONS
 * Una lambda es una funcion anonima. Es una manera de declarar funciones con menos texto
 * Una lambda normalmente necesita un return. Si la funcion tiene {} tendremos que escribirlo, sino queda implicito
 * Los parametros de la funcion lambda se declaran entre parentesis () seguido de una flecha =>
 */


/**
 * Declara una lambda sin parametros de entrada y sin return
 */
const lambda = () => {
  console.log("Esto es una lambda")
};

/**
 * Declara una lambda con un parametro nombre y sin return
 * @param nombre
 */
const saludar2 = (nombre) => {
  console.log("Hola " + nombre);
};


/**
 * Declara una lambda con un parametro y con return implicito
 * @param nombre
 * @returns {string}
 */
const crearSaludo2 = (nombre) => "Hola " + nombre;

/**
 * Declara una lambda con un parámetro y con return después de {}
 * @param nombre
 * @returns {string}
 */
const crearSaludo3 = (nombre) => {
  return "Hola " + nombre;
};
