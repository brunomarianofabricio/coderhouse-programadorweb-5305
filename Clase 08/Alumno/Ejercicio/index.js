/*var texts = ['Ed', 'Edd', 'Eddy' ]

var lista = document.createElement('ul')

lista.id = 'mainList';
lista.className = 'list-group';

for (let index = 0; index < texts.length; index++) {
    const element = texts[index];
    
    var li = document.createElement('li');
    li.className = 'list-group-item';

    li.innerHTML = element;
    lista.appendChild(li);
     

}

document.body.appendChild(lista);*/


var student = {
    firstName: 'Juan',
    lastName: 'Peréz',
    dni: 22999333,
    email: 'juan@gmail.com'
  }

  var listaAlumnos = document.createElement('li')

listaAlumnos.className = 'list-group-item';
listaAlumnos.id = student.dni;

var h1 = document.createElement('h1');
h1.innerHTML = student.firstName + student.lastName;
listaAlumnos.appendChild(h1);

var h3 = document.createElement('h3');
h3.innerHTML = student.dni;
listaAlumnos.appendChild(h3);

var p = document.createElement('p');
p.innerHTML = student.email;
listaAlumnos.appendChild(p);

var ul = document.getElementById('students');
ul.appendChild(listaAlumnos);


 


