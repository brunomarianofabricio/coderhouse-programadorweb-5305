let txtMail = $('#email');

$(document).on('input','#email',validarMail);

function validarMail(){

    let mail = txtMail.val().trim();

    if(mail.length <= 0){

        txtMail.addClass('is-invalid');
        return
    }

    if(mail.includes('@') == false){
        
        txtMail.addClass('is-invalid');
        return

    }

    if(mail.includes('.') == false){

        txtMail.addClass('is-invalid');
        return

    }

    txtMail.removeClass('is-invalid');
}   
