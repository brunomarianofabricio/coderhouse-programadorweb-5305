let txtprimerNombre = document.getElementById('firstName');
let txtapellido = document.getElementById('lastName');
let txtnumeroDocumento = document.getElementById('dni');
let txtMail = document.getElementById('email');

txtprimerNombre.addEventListener('input', validarNombre);
txtnumeroDocumento.addEventListener('input', validarDni);
txtapellido.addEventListener('input', validarApellido);
txtMail.addEventListener('input', validarMail);


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
    


     if(parseInt(dni) < 0){

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