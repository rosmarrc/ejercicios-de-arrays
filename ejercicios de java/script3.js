function verificarEdad() {
    var edad = document.getElementById("edad").value;
    var mensajeBienvenida = document.getElementById("mensajeBienvenida");

    if (edad) {
        if (edad >= 18) {
            var mensaje = "Usted tiene acceso a todos nuestros servicios.";
            mensajeBienvenida.textContent = mensaje;
        } else {
            var mensaje = "Usted tiene acceso a servicios limitados.";
            mensajeBienvenida.textContent = mensaje;
        }
    } else {
        alert("Por favor, ingresa tu edad antes de hacer clic en 'Verificar'.");
    }

    return false;
}

