var testList = ['CARLOS','GERONIMO','NICOLAS','LUCAS']

//Declaracion de la funcion
function setLocalList (keyList, list){

    if (typeof keyList==='string' && Array.isArray(list)) {
      
        
        let listString = JSON.stringify (list);
        localStorage.setItem(keyList, listString);

    }

    

}

//Llamando a la funcion
setLocalList('juan', testList);
// setLocalList("mau", testList);


