//Clase 10: ¿Qué es el hoisting?

// JavaScript solo utiliza el hoisting en declaraciones, mas no en inicializaciones

a = 2;
var a;
console.log(a); //2



console.log(a);
var a = 2;


nameOfDog("Elmo");

function nameOfDog (name){
    console.log(name);
};

