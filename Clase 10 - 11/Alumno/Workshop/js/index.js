var listaAlumnos = [];

//Botones de accion
let botonAgregar = document.getElementById('btn-add');
let botonEliminar = document.getElementById('btn-delete');
let botonBuscar = document.getElementById('btn-search');

//Inputs para dar de alta un nuevo alumno
let txtprimerNombre = document.getElementById('nombreInput');
let txtapellido = document.getElementById('apellidoInput');
let txtnumeroDocumento = document.getElementById('dniInput');
let txtMail = document.getElementById('emailInput');

//Input para eliminar un alumno
let txtDniAEliminar = document.getElementById('dniInputEliminar');

//input para buscar un alumno
let txtNombreABuscar = document.getElementById('txtnombreABuscar');

txtprimerNombre.addEventListener('blur', validarNombre);
txtnumeroDocumento.addEventListener('blur', validarDni);
txtapellido.addEventListener('blur', validarApellido);
txtMail.addEventListener('blur', validarMail);

botonAgregar.addEventListener('click', agregarAlumno);
botonEliminar.addEventListener('click', eliminarAlumno);
botonBuscar.addEventListener('click', buscarAlumno);


 function validarNombre (){

    let nombre = txtprimerNombre.value.trim();

    if(nombre.length <= 0){

        txtprimerNombre.classList.add('is-invalid');

        
    }else{
        txtprimerNombre.classList.remove('is-invalid');
    }


    }


 function validarDni(){

     let dni = txtnumeroDocumento.value.trim();
    


     if(dni.length <= 0){

         txtnumeroDocumento.classList.add('is-invalid');
    
    }else {
         
        txtnumeroDocumento.classList.remove('is-invalid');
     }
    }


    function validarApellido(){

        let apellido = txtapellido.value.trim();


    }


    function validarMail(){

        let mail = txtMail.value.trim();

        if(mail.length <= 0){
            
            txtMail.classList.add('is-invalid');
            return;
        }

        if(mail.includes('@') == false){

            txtMail.classList.add('is-invalid');
            return;
        }

        if(mail.includes('.') == false){

            txtMail.classList.add('is-invalid');
            return;
        }

        txtMail.classList.remove('is-invalid');
         

    }


    function agregarAlumno(event) {
        event.preventDefault();

        var nuevoAlumno = {
          nombre: txtprimerNombre.value,
          dni: txtnumeroDocumento.value,
          apellido: txtapellido.value,
          mail: txtMail.value
        };
      
        //Agregamos al array el nuevo alumno
        listaAlumnos.push(nuevoAlumno);


        var bodyTable = document.getElementById('bodyTable');
        var tr = document.createElement('tr');
        tr.id = txtnumeroDocumento.value;
        var tdNombre = document.createElement('td');
        tdNombre.innerHTML = txtprimerNombre.value;
        tr.appendChild(tdNombre);
        var tdApellido = document.createElement('td');
        tdApellido.innerHTML = txtapellido.value;
        tr.appendChild(tdApellido);
        var tdDni = document.createElement('td');
        tdDni.innerHTML = txtnumeroDocumento.value;
        tr.appendChild(tdDni);
        var tdEmail = document.createElement('td');
        tdEmail.innerHTML = txtMail.value;
        tr.appendChild(tdEmail);
        bodyTable.appendChild(tr);

        setLocalList('lista',listaAlumnos)

      }
      

      function setLocalList(key,value){
        
        localStorage.setItem(key,JSON.stringify(value))

      }

      function eliminarAlumno(event) {
        let dni = txtDniAEliminar.value;

        let posicion;

        for (let index = 0; index < listaAlumnos.length; index++) {
            const alumno = listaAlumnos[index];
            if(alumno.dni === dni){
                posicion = index;
                break
            }
        }
        listaAlumnos.splice(posicion,1);
        setLocalList('lista',listaAlumnos);

        let tr = document.getElementById(dni);
        tr.parentNode.removeChild(tr);
      }

      function buscarAlumno(event) {
          event.preventDefault();

        let nombre = txtNombreABuscar.value;

        for (let index = 0; index < listaAlumnos.length; index++) {
            const alumno = listaAlumnos[index];
            if(nombre === alumno.nombre){
                document.getElementById('imprimirNombreBusqueda').innerHTML = alumno.nombre;
                document.getElementById('imprimirApellidoBusqueda').innerHTML = alumno.apellido;
                document.getElementById('imprimirDniBusqueda').innerHTML = alumno.dni;
                document.getElementById('imprimirMailBusqueda').innerHTML = alumno.mail;

            }
        }

    }

