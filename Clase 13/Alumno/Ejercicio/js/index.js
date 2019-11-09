let numText = $('#numtext'); //llamo al id del html


$(document).keydown(funcionesMatematicas); //comienzo con el keydown




function funcionesMatematicas(event){
   

    let numeroActual = parseInt(numText.html());
    
    switch (event.which) {
        case 13:
        numeroActual = 0;
            break;
    
        case 38: 
        numeroActual ++;
            break;
    
        case 40: 
        numeroActual --;
        if (numeroActual <0) {
            numeroActual = 0
        };
            break;
    
        default:
            
            break;
    }
    
    numText.html(numeroActual);
    
  }
