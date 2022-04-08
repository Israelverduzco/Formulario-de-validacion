//variables para acceder al id y para poder validar con una funcion
var nombre = document.getElementById("nombre");
var apellido = document.getElementById("apellido");



// funcion para validar campos del formulario
function enviarFormulario(){ // poner nombre en el onclick del html en la etiqueta del boton

    // valida el campo nombre

    if(nombre.value === null || nombre.value === ''){
        alert("ingresa tu nombre")
    }

    // valida el campo apellido
    if(apellido.value === null || apellido.value === ''){
        alert("ingresa tu apellido")
    }

// obtenemos todos los input radio del grupo sexo que esten checados
    // si no hay ninguno lanzamos alerta

    if(!document.querySelector('input[name="sexo"]:checked')){
        alert('Elige tu sexo');
        hasError=true
    }

    // obtenemos los input de checkbox del grupo terminos que este checados
    // si no hay ninguno se lanza una alerta
    if(!document.querySelector('input[name="terminos"]:checked')){
        alert('Acepta terminos y condiciones para continuar');
        hasError=true
    }

}


