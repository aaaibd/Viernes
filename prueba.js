function alternarCalculos() {
    var figura = document.getElementById("figure").value;
  
    document.getElementById("triangle").classList.add("hidden");
    document.getElementById("circle").classList.add("hidden");
    document.getElementById("sphere").classList.add("hidden");
  
    if (figura === "triangle") {
      document.getElementById("triangle").classList.remove("hidden");
    } else if (figura === "circle") {
      document.getElementById("circle").classList.remove("hidden");
    } else if (figura === "sphere") {
      document.getElementById("sphere").classList.remove("hidden");
    }
  }
  
  function calcularTriangulo() {
    var base = parseFloat(document.getElementById("triangleBase").value);
    var altura = parseFloat(document.getElementById("triangleHeight").value);
  
    var area = (base * altura) / 2;
    var perimetro = base * 3;
  
    document.getElementById("triangleArea").value = area;
    document.getElementById("trianglePerimeter").value = perimetro;
  }
  
  function calcularCirculo() {
    var radio = parseFloat(document.getElementById("circleRadius").value);
  
    var area = Math.PI * radio * radio;
    var perimetro = 2 * Math.PI * radio;
  
    document.getElementById("circleArea").value = area;
    document.getElementById("circlePerimeter").value = perimetro;
  }
  
  function calcularEsfera() {
    var radio = parseFloat(document.getElementById("sphereRadius").value);
  
    var volumen = (4 / 3) * Math.PI * Math.pow(radio, 3);
    var areaSuperficie = 4 * Math.PI * Math.pow(radio, 2);
  
    document.getElementById("sphereVolume").value = volumen;
    document.getElementById("sphereSurfaceArea").value = areaSuperficie;
  }
  