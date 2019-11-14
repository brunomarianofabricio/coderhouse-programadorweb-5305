let txtFirstName = $('#firstName');
let txtMail = $('#email');
let txtComments = $('#comments');
let habilitarBoton = $('#submitButton');

$(document).on('input','#email',validarMail);
$(document).on('input','#firstName',validarNombre);
$(document).on('input','#comments',validarComentario);
$(document).on('focusout','#email',validarMail);
$(document).on('focusout','#firstName',validarNombre);
$(document).on('focusout','#comments',validarComentario);


function validarMail(event){

    let mail = txtMail.val().trim();
    txtMail.next().remove();
    
    if(mail.length <= 0){
        txtMail.addClass('is-invalid');
        txtMail.after('<span class="text-danger">Complete el campo con su Mail</span>');
        return;
    }
    
    if(mail.includes('@') == false){
        txtMail.after('<span class="text-danger">El campo debe tener "@"</span>');
        txtMail.addClass('is-invalid');
        return;
    }

    if(mail.includes('.') == false){
        txtMail.after('<span class="text-danger">El campo debe tener "."</span>');
        txtMail.addClass('is-invalid');
        return;
    }

    txtMail.removeClass('is-invalid');

}




function validarNombre(event){

    let nombre = txtFirstName.val().trim();
    txtFirstName.next().remove();

    if(nombre.length <= 0){
        txtFirstName.addClass('is-invalid');
        txtFirstName.after('<span class="text-danger">Complete el campo con su nombre</span>');
        
    }else{
        txtFirstName.removeClass('is-invalid');
       

    }

}


function validarComentario(event){

    let comentario = txtComments.val().trim();
    txtComments.next().remove();

    if(comentario.length <= 0){
        txtComments.addClass('is-invalid');
        txtComments.after('<span class="text-danger">Complete el campo con su comentario</span>');

    }else{
        txtComments.removeClass('is-invalid');
        
    }
}