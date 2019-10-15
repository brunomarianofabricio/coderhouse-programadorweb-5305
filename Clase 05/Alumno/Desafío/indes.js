/*
- Crear una función que permita crear un objeto Student mediante el constructor `new`, el objeto deberá tener las siguientes propiedades:
   - Publicas:
      - `firstName`
      - `lastName`
      - `dni`
      - `email`
    - Privadas:
      - `id` generada automáticamente al crear el objeto.
- El objeto deberá tener las siguientes métodos:
   - Públicos:
     - `getId` deberá devolver el `id` del objeto
     - `getFullName` deberá devolver un String con el nombre completo del objeto, salvando los casos donde el `firstName` o`lastName` sea `undefined`.
- Crear tres alumnos usando los datos de prueba y probar sus métodos.*/


function Student(firstNameParam, lastNameParam, dniParam, emailParam){
    this.firstName = firstNameParam;
    this.lastName = lastNameParam;
    this.dni = dniParam;
    this.email = emailParam;

    let id = Math.random();

    this.getFullName = function(){
       
        if (this.firstName === undefined || this.lastName === undefined){
            return 'El nombre o apellido son incorrectos'
        }
        return this.firstName + ' ' +this.lastName;
    };

    this.getId = function(){
        return id;
    }
}

var alumno1 = new Student ('Juan', 'Perez', '45678987', 'juan@gmail.com');
console.log (alumno1.getFullName());

var alumno2 = new Student ('Ana', 'Fernandez', '45678989', 'ana@gmail.com');
console.log (alumno2.getFullName());

var alumno3 = new Student ('Pedro', 'Mármol', '45678956', 'pedro@gmail.com');
console.log (alumno3.getFullName());

var alumno3 = new Student (undefined, 'Mármol', '45678956', 'pedro@gmail.com');
console.log (alumno3.getFullName());