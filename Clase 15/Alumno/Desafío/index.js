$('body').append('<div class="container"> <table class="table table-dark">')
$('table').append('<thead>');
$('thead').append('<tr>');
$('tr').append(' <th scope="col">#</th>');
$('tr').append(' <th scope="col">Nombre</th>');
$('tr').append(' <th scope="col">Género</th>');
$('tr').append(' <th scope="col">Altura</th>');
$('tr').append('  <th scope="col">Peso</th>');
$('tr').append(' <th scope="col">Color de ojos</th>');
$('tr').append('<th scope="col"></th>');
$('tr').append('</tr>');
$('tr').append('</thead>');
$('<tbody id="tableBody">').insertAfter('thead')

$('tbody').append('</tbody>');
$('table').append('</table> </div>');







var request = $.ajax({
    url: "https://swapi.co/api/people",
    method: "GET"
  })
  
  request.done(function( data ) {
    console.log( 'Respuesta: ',data )

    for (let index = 0; index < data.results.length; index++) {
        const personaje = data.results[index];
        
        $('tbody').append('<tr id="' + index + '" style="overflow: hidden;">');
$('#' + index + '').append(' <td>1</td>');
$('#' + index + '').append(' <td>' + personaje.name + ' </td>');
$('#' + index + '').append('<td>' + personaje.gender + '</td>');
$('#' + index + '').append(' <td>' + personaje.height + '</td>');
$('#' + index + '').append(' <td>' + personaje.mass + '</td>');
$('#' + index + '').append(' <td>' + personaje.eye_color + '</td>');
$('#' + index + '').append('<td style="padding:0"><button type="button" class="btn btn-danger">Eliminar</button></td>');

$('#' + index + '').append(' </tr>');



    }

     $('.btn').click(eliminarFila);

  function eliminarFila (){

    let eliminar = $(this);

    let quitar = eliminar.parent().parent();

    quitar.fadeOut(2000);

  }

  });
  
  request.fail(function( error ) {
    console.log( 'Error: ' , error )
  })

  
  
 