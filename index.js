document.addEventListener("DOMContentLoaded", function() {
    var algoritmoSelect = document.getElementById('algoritmo');
    var semilla2Container = document.getElementById('semilla2Container');

    algoritmoSelect.addEventListener('change', function() {
        if (algoritmoSelect.value === 'productos_medios') {
            semilla2Container.style.display = 'block';
        } else {
            semilla2Container.style.display = 'none';
        }
    });
});

document.getElementById('simulacionForm').addEventListener('submit', function(event) {
    event.preventDefault();
    generarSimulacion();
});

function generarSimulacion() {
    var cantidadNumerosElement = document.getElementById('cantidadNumeros');
    var semilla1Element = document.getElementById('semilla1');
    var semilla2Element = document.getElementById('semilla2');
    var algoritmoElement = document.getElementById('algoritmo');

    if (!cantidadNumerosElement || !semilla1Element || !algoritmoElement) {
        console.error('No se encontraron todos los elementos necesarios');
        return;
    }

    var cantidadNumeros = cantidadNumerosElement.value;
    var semilla1 = parseInt(semilla1Element.value);
    var semilla2 = parseInt(semilla2Element.value);
    var algoritmo = algoritmoElement.value;
    var d = parseInt(document.getElementById('d').value);
    var resultadosDiv = document.getElementById('tablaResultados');
    resultadosDiv.innerHTML = '';

    if (algoritmo === 'cuadrados_medios') {
        // Llama a la función correspondiente del archivo cuadrados_medios.js
        simularCuadradosMedios(cantidadNumeros, semilla1, d);
    } else if (algoritmo === 'productos_medios') {
        // Llama a la función correspondiente del archivo productos_medios.js
        simularProductosMedios(cantidadNumeros, semilla1, semilla2, d);
    }
}


function simularCuadradosMedios(cantidadNumeros, semilla, d) {
    var resultadosDiv = document.getElementById('tablaResultados');

    // Lógica para la simulación de cuadrados medios
    // Esta función puede estar en el archivo cuadrados_medios.js
    // Pero aquí incluyo la lógica directamente para simplificar el ejemplo
    var resultados = '<h3>Resultados de Cuadrados Medios</h3>';
    resultados += '<table>';
    resultados += '<thead><tr><th>yi</th><th>xi</th><th>ri</th></tr></thead>';
    resultados += '<tbody>';

    var semillaActual = semilla;
    for (var i = 0; i < cantidadNumeros; ++i) {
        var yi = semillaActual * semillaActual;
        var yiStr = yi.toString();
        var inicio = (yiStr.length - d) / 2;
        var xi = parseInt(yiStr.substr(inicio, d));
        var ri = xi / Math.pow(10, d);

        resultados += '<tr><td>' + yi + '</td><td>' + xi.toString().padStart(d, '0') + '</td><td>' + ri.toFixed(d) + '</td></tr>';

        semillaActual = xi;
    }

    resultados += '</tbody></table>';
    resultadosDiv.innerHTML = resultados;
}

function simularProductosMedios(cantidadNumeros, semilla1, semilla2, d) {
    var resultadosDiv = document.getElementById('tablaResultados');

    // Lógica para la simulación de productos medios
    // Esta función puede estar en el archivo productos_medios.js
    // Pero aquí incluyo la lógica directamente para simplificar el ejemplo
    var resultados = '<h3>Resultados de Productos Medios</h3>';
    resultados += '<table>';
    resultados += '<thead><tr><th>yi</th><th>xi</th><th>ri</th></tr></thead>';
    resultados += '<tbody>';

    var semillaActual1 = semilla1;
    var semillaActual2 = semilla2;

    for (var i = 0; i < cantidadNumeros; ++i) {
        var yi = semillaActual1 * semillaActual2;
        var yiStr = yi.toString();
        var inicio = (yiStr.length - d) / 2;
        var xi = parseInt(yiStr.substr(inicio, d));
        var ri = xi / Math.pow(10, d);

        resultados += '<tr><td>' + yi + '</td><td>' + xi.toString().padStart(d, '0') + '</td><td>' + ri.toFixed(d) + '</td></tr>';

        semillaActual1 = semillaActual2;
        semillaActual2 = xi;
    }

    resultados += '</tbody></table>';
    resultadosDiv.innerHTML = resultados;
}
