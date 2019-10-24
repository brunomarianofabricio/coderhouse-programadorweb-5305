var mail = document.getElementById('email');

mail.onblur = showMessage

function showMessage(event){

    var inputNode = event.target
    
    if (inputNode.value.indexOf('@') === -1 || inputNode.value.indexOf('.') === -1) {
        
        inputNode.className = 'is-invalid form-control'
        
        
    }


    else {

        inputNode.className = 'is-valid form-control'


    }
}