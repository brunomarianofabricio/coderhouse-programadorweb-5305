

function includesText (valorAComparar, valorIngresado){

    if (valorIngresado.indexOf(valorAComparar)===-1) {

        return false;
        
    }
    return true;
}

console.log(includesText('Pa', 'Patricia'));
console.log(includesText('Patricia', 'Pa'));