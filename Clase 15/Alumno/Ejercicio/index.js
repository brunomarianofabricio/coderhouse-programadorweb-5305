
var request = $.ajax({
    url: "https://swapi.co/api/people/1",
    method: "GET"
  })
  
  request.done(function( data ) {
    console.log( 'Respuesta: ',data )

    
$('body').append('<h1 class="text-dark text-center pb-4 display-1">Star Wars Api</h1>');
$('body').append('<h2 class="display-4 p-4">Personaje:' + data.name + '</h2>');
$('body').append('<h2 class="display-4 p-4">Peso y Altura:' + data.height + - data.mass +' </h2>');
$('body').append('<h2 class="display-4 p-4">Sexo:' + data.gender + '</h2>');
$('body').append('<h2 class="display-4 p-4">Peliculas:' + data.films + '</h2>');

  });
  
  request.fail(function( error ) {
    console.log( 'Error: ' , error )
  })