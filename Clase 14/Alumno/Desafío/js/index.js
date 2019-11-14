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
$('tbody').append('<tr id="1" style="overflow: hidden;">');
$('#1').append(' <td>1</td>');
$('#1').append(' <td>Luke Skywalker</td>');
$('#1').append('<td>Hombre</td>');
$('#1').append(' <td>172 cm</td>');
$('#1').append(' <td>77 kg</td>');
$('#1').append(' <td>Azul</td>');
$('#1').append('<td style="padding:0"><button type="button" class="btn btn-danger">Eliminar</button></td>');
$('#1').append(' </tr>');
$('tbody').append('</tbody>');
$('table').append('</table> </div>');

$('.btn').click(eliminarFila);


function eliminarFila(){

    let eliminar = $('.btn'); 

    let padre = eliminar.parent().parent();

    padre.fadeOut(2000);




}
