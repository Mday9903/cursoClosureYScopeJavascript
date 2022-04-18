//Clase 9: Loops.

const anotherFunction = () => {
    for (let i=0; i<10; i++){
        setTimeout(() =>{
            console.log(i);
        }, 1000)
    }
}

anotherFunction();

//Si en un loop (ciclo for) utilizamos la variable con la palabra reservada VAR
//nos va a mostrar solo el último número, la cantidad de veces que dicta este ciclo.
//La forma de solucionarlo es con la palabra reservada LET.