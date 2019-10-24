var nombre = document.getElementById('firstName');

nombre.onblur = showMessage

function showMessage(event){

    var inputNode = event.target

    if (inputNode.value === '') {
        
        inputNode.className = 'is-invalid form-control'
    }
    
    else {

        inputNode.className = 'is-valid form-control'
    }

}


