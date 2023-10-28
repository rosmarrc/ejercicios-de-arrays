function generarTabla() {
    var valor = document.getElementById("valorInput").value;
    if (valor >= 1 && valor <= 10) {
        var tabla = "<thead><tr><th>Multiplicando</th><th>Multiplicador</th><th>Resultado</th></tr></thead><tbody>";
        for (var i = 1; i <= 12; i++) {
            var resultado = valor * i;
            tabla += "<tr><td>" + valor + "</td><td>" + i + "</td><td>" + resultado + "</td></tr>";
        }
        tabla += "</tbody>";
        document.getElementById("tablaMultiplicar").innerHTML = tabla;
    } else {
        alert("Ingresa un valor válido del 1 al 10.");
    }
}
