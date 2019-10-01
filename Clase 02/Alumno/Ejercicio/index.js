//pedir por prompt un dia de la semana

let diaDeLaSemana = prompt('Ingrese un dia de la semana: ');

//mostrar en colola un mensaje si el dia es fin de semana, habil o no es un dia valido

//si se ingresa Lunes
//toLowerCase () lo convierte a lunes
switch (diaDeLaSemana.toLowerCase()) {
    case 'lunes':
    case 'martes':
    case 'miercoles':
    case 'miércoles':
    case 'jueves':
    case 'viernes':   
        console.log('es un dia habil');
        break;
   
    case 'sábado':
    case 'sabado':
    case 'domingo':
        console.log('Es un dia de fin de semana');
        break;

    default:
        console.log('No es un dia valido');
        break;
}