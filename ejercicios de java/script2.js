function saludar() {
    var nombre = document.getElementById("nombre").value;
    var mensajeBienvenida = document.getElementById("mensajeBienvenida");

    if (nombre) {
        var mensaje = "Bienvenido " + nombre + ", al sistema de consulta.";
        mensajeBienvenida.textContent = mensaje;
    } else {
        alert("Por favor, ingresa tu nombre antes de hacer clic en 'Enviar'.");
    }

    return false;
}
