// Clase 5
const fruits = () => {
    if (true) {
        var fruits1 = "apple";
        let fruits2 = "banana";
        const fruits3 = "kiwi";
        console.log(fruits2);
        console.log(fruits3);
        //con var podemos acceder a una variable desde fuera del bloque. Es decir, desde el interior de la misma función pero fuera del bloque de código.
    }
    console.log(fruits1);
};

fruits();

var x = 1;
{
    var x = 2;
    console.log(x);
}
console.log(x);

const anotherFunction = () => {
    for (let i=0; i<10; i++){
        setTimeout(() =>{
            console.log(i);
        }, 1000)
    }
}

anotherFunction();