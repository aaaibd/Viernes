function mostrarCalculo() {
    var figuraSeleccionada = document.getElementById("figura").value;
    var calculoDiv = document.getElementById("calculo");
    calculoDiv.innerHTML = "";

    if (figuraSeleccionada === "triangulo") {
        calculoDiv.innerHTML = generarFormulario("triangulo", ["lado1", "lado2", "lado3"], ["base", "altura"], ["Calcular Perímetro"], ["Calcular Área"]);
    } else if (figuraSeleccionada === "circulo") {
        calculoDiv.innerHTML = generarFormulario("circulo", [], ["radio"], ["Calcular Perímetro"], ["Calcular Área"]);
    } else if (figuraSeleccionada === "esfera") {
        calculoDiv.innerHTML = generarFormulario("esfera", [], ["radio"], [], ["Calcular Volumen", "Calcular Área"]);
    }
}

function generarFormulario(figura, parametrosPerimetro, parametrosArea, botonesPerimetro, botonesArea) {
    var formulario = `
        <h3>${figura.charAt(0).toUpperCase() + figura.slice(1)}</h3>`;

    if (parametrosPerimetro.length > 0) {
        formulario += `
            <p>Ingrese los valores:</p>`;
        parametrosPerimetro.forEach(parametro => {
            formulario += `
                <label for="${parametro}">${parametro.charAt(0).toUpperCase() + parametro.slice(1)}:</label>
                <input type="number" id="${parametro}"><br>`;
        });

        botonesPerimetro.forEach(boton => {
            formulario += `
                <button onclick="calcularPerimetro('${figura}')">${boton}</button>`;
        });
    }

    if (parametrosArea.length > 0) {
        formulario += `
            <p>Ingrese los valores:</p>`;
        parametrosArea.forEach(parametro => {
            formulario += `
                <label for="${parametro}">${parametro.charAt(0).toUpperCase() + parametro.slice(1)}:</label>
                <input type="number" id="${parametro}"><br>`;
        });

        botonesArea.forEach(boton => {
            formulario += `
                <button onclick="calcularArea('${figura}')">${boton}</button>`;
        });
    }

    return formulario;
}

function calcularPerimetro(figura) {
    var parametros = obtenerParametros(figura);
    var perimetro = 0;

    if (figura === "triangulo") {
        perimetro = parametros.reduce((total, parametro) => total + parseFloat(document.getElementById(parametro).value), 0);
    } else if (figura === "circulo") {
        var radio = parseFloat(document.getElementById("radio").value);
        perimetro = 2 * Math.PI * radio;
    }

    alert(`El perímetro del ${figura} es: ${perimetro}`);
}

function calcularArea(figura) {
    var parametros = obtenerParametros(figura);
    var area = 0;

    if (figura === "triangulo") {
        var base = parseFloat(document.getElementById("base").value);
        var altura = parseFloat(document.getElementById("altura").value);
        area = (base * altura) / 2;
    } else if (figura === "circulo") {
        var radio = parseFloat(document.getElementById("radio").value);
        area = Math.PI * radio * radio;
    } else if (figura === "esfera") {
        var radio = parseFloat(document.getElementById("radio").value);
        area = 4 * Math.PI * radio * radio;
    }

    alert(`El área del ${figura} es: ${area}`);
}

function obtenerParametros(figura) {
    var parametros = [];

    if (figura === "triangulo") {
        parametros = ["lado1", "lado2", "lado3"];
    }

    return parametros;
}
