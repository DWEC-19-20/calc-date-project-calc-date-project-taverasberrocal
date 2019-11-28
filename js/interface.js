

document.getElementById("Convertir").addEventListener("click", function () {
    var fecha = document.getElementById("campoFecha").value;
    var days = +document.getElementById("campoDias1").value;

    var resultado = calcDate(new Date(fecha), days);
    document.getElementById("campoResultado1").innerHTML = resultado;
});

document.getElementById("calcularNaturales").addEventListener("click", function () {

    var fecha1 = document.getElementById("campoFecha1").value;
    var fecha2 = document.getElementById("campoFecha2").value;

    /*var resultado1 = new Date(fecha1).getTime();
    var resultado2 = new Date(fecha2).getTime();*/

    var resultadoFinal = getDays(new Date(fecha1), new Date(fecha2));
    document.getElementById("campoDiferenciaDias").innerHTML = resultadoFinal;
});

document.getElementById("calcularHabiles").addEventListener("click", function () {

    var fechaOrigen = document.getElementById("campoFechaOrigen").value;
    var days = +document.getElementById("campoDias2").value;

    var resultado = calcWorkingDate(new Date(fechaOrigen), days);
    document.getElementById("campoResultado2").innerHTML = resultado;
});

document.getElementById("calcularHabilesFechas").addEventListener("click", function () {

    var fecha1 = document.getElementById("campoFechaHabil1").value;
    var fecha2 = document.getElementById("campoFechaHabil2").value;

    var resultado = getWorkingDays(new Date(fecha1), new Date(fecha2));
    document.getElementById("campoResultado3").innerHTML = resultado;
});

document.getElementById("boton1").addEventListener("click", function () {

    document.getElementById('obj1').style.display = 'block';
    document.getElementById('obj2').style.display = 'none';
    document.getElementById('obj3').style.display = 'none';
    document.getElementById('obj4').style.display = 'none';
});


document.getElementById("boton2").addEventListener("click", function () {
    document.getElementById('obj2').style.display = 'block';
    document.getElementById('obj1').style.display = 'none';
    document.getElementById('obj3').style.display = 'none';
    document.getElementById('obj4').style.display = 'none';
  

});

    document.getElementById("boton3").addEventListener("click", function () {
        document.getElementById('obj3').style.display = 'block';
        document.getElementById('obj1').style.display = 'none';
        document.getElementById('obj4').style.display = 'none';
        document.getElementById('obj2').style.display = 'none';
      
    
    });
    document.getElementById("boton4").addEventListener("click", function () {
        document.getElementById('obj4').style.display = 'block';
        document.getElementById('obj3').style.display = 'none';
        document.getElementById('obj2').style.display = 'none';
        document.getElementById('obj1').style.display = 'none';
      
    
    });

    document.getElementById("CalculadoraPequeña").addEventListener("click", function () {
        window.open("index2.html","index2","width:300px height:300px");
        
      
    
    });
