// 1. funcion para mostrar u ocultar información
function mostrarMas(idElemento) {
    let elemento = document.getElementById(idElemento);
    if (elemento.style.display === "none") {
        elemento.style.display = "block";
    } else {
        elemento.style.display = "none";
    }
}

// 2. función para validar el formulario de contacto
function enviarFormulario() {
    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    let mensaje = document.getElementById("mensaje").value;

    if (nombre === "" || email === "" || mensaje === "") {
        document.getElementById("respuesta").innerText = "Error: Por favor completá todos los campos.";
    } else {
        document.getElementById("respuesta").innerText = "¡Gracias " + nombre + "! Recibimos tu demo/mensaje.";
    }
}
