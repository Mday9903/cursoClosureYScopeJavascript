//Clase 7 : Ámbito léxico en closures

const buildCount = (i) => {
    let count = i;
    const displayCount = () => {
        console.log(count++); // La razón por la que el console empieza a 
                              // mostrar desde el valor que el enviamos primero 
                              // (en este caso es 1) y no desde el valor aumentado 
                              // es por el posiscionamiento de count. Si queremos 
                              // que muestre desde el primer incremento tenemos que
                              // colocar console.log(++count); 
    };
    return displayCount;
};

const myCount = buildCount(1);
myCount();
myCount();
myCount();

const myOtherCount = buildCount(10);
myOtherCount();
myOtherCount();

myCount();