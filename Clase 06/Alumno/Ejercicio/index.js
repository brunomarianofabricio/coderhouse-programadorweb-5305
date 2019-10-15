var numbers = [1,2,3,4,5]

function deleteElement (index, arrayNumeros){
    if (Array.isArray(arrayNumeros) && index <= arrayNumeros.length-1) {
    
        arrayNumeros.splice (index,1);
    return arrayNumeros;
    }
    
    return undefined;
}

console.log(deleteElement(4,numbers));



