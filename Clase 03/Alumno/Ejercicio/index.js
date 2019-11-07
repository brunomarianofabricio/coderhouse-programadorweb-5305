


var daysOfTheWeek = [
    'Lunes',
    'Martes',
    'Miércoles',
    'Miercoles',
    'Jueves',
    'Viernes',
    'Sábado',
    'Sabado',
    'Domingo',
    'Pato'
  ]

  for(var i = 0; i < daysOfTheWeek.length; i++){
    let dia = daysOfTheWeek[i];
    console.log(dia);



 
switch (dia) {


        case 'lunes':
          console.log('Es un dia habil'); 
          break;

        case 'Martes':
            console.log('Es un dia habil');
            break;

        case 'Miercoles':
            console.log('Es un dia habil');
            break;

        
        case 'Miércoles':
            console.log('Es un dia habil');
            break;
        
        case 'Jueves':
            console.log('Es un dia habil');
            break;

         
       case 'Viernes':
            console.log('Es un dia habil');
            break;
        
        case 'Sabado':
            console.log('Es fin de semana');
            break;

        case 'Domingo':
            console.log('Es fin de semana');
            break;

        default:
            console.log('Dia no hábil');
            


        }

}