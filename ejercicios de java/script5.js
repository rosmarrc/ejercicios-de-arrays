function generarTabla() {
    var numero = document.getElementById("numero").value;
    var tabla = "<thead><tr><th>Multiplicando</th><th>Multiplicador</th><th>Resultado</th></tr></thead><tbody>";
    for (var i = 1; i <= 12; i++) {
        var resultado = numero * i;
        tabla += "<tr><td>" + numero + "</td><td>" + i + "</td><td>" + resultado + "</td></tr>";
    }
    tabla += "</tbody>";
    document.getElementById("tablaMultiplicar").innerHTML = tabla;
}
