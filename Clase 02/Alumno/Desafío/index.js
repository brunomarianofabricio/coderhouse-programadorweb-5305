let variableDelPrompt = prompt('Ingrese su genero: ');
let variableDeLaEdad = prompt('Ingrese su edad: ');



let genero;
switch (variableDelPrompt) {
    
    case 'masculino':
        genero ='Sr.';
        break;

    case 'femenino':
        genero ='Sra.';
        break
        
    case 'binario':
        genero = 'Ux. ';
        break

        default:
            genero = 'No es un genero'
        break;
}

let edad;
if (variableDeLaEdad > 18) {
    edad = ' usted es mayor de edad';
} else{
    edad = ' usted es menor de edad';
}

console.log(genero+edad);