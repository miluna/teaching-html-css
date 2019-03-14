const lista1 = ["a", "b", "c"];


const lista2 = ["d", "e", "f"];


const lista3 = ["g", "h", "i"];

// ["a", "b", "c", "d", "e", "f", "g", "h", "i"]

// METODO 1
const lista4 = [];

lista1.forEach(letra => lista4.push(letra));
lista2.forEach(letra => lista4.push(letra));
lista3.forEach(letra => lista4.push(letra));


// METODO 2

const lista5 = [...lista1, ...lista2, ...lista3];

console.log(lista4);
console.log(lista5);

console.log("----------------------");

// this.setState({todos: [...this.state.todos, todo]})

const obj = {
    name: "Pepe",
    apellido: "Fernandez"
};

const obj2 = {
    email: "pepe@gmail.com"
};


const obj3 = {
    ...obj,
    ...obj2,
    localidad: "Madrid"
};

console.log(obj3);
