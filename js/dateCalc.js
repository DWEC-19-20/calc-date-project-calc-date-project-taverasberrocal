/* Función que suma o resta un número de dias naturales según el valor de operation 
   startdate: objeto Fecha 
   days: número de días naturales
   return el resultado como un string en formato dd/mm/YYYY
*/


function calcDate(startdate, days) {
    
    var resultado = new Date(startdate);
    
    
    resultado.setDate(resultado.getDate() + days);

    return resultado.toLocaleDateString("es-ES");
}

/*  Función que recibe dos fechas de tipo Date y devuelva el el número de días naturales que hay entre las dos fechas. 
    startdate: objeto Fecha inicio
    endDate: objeto Fecha inicio
    return número de días naturales entre las dos fechas
*/

function getDays(startdate, endDate) {

    var resultado1 = new Date(startdate);
    var resultado2 = new Date(endDate);

    /*var diferencia = resultado1 - resultado2;
    var diff = (diferencia / ((1000 * 60 * 60 * 24)));*/

    return Math.round(Math.abs(resultado1.getTime() - resultado2.getTime()) / ((1000 * 60 * 60 * 24)));
}

/*  Función que suma o resta un número de dias hábiles según el valor de operation 
    startdate: objeto Fecha 
    days: número de días hábiles
    return el resultado como un string en formato dd/mm/YYYY
*/

function calcWorkingDate(startdate, days) {
    
    var fechaFinal = new Date(startdate);
    var fecha = new Date(startdate);

    var arrayFestivos = [[1, 0], [6, 0], [1, 4], [15, 7], [12, 9], [1, 10], [6, 11], [8, 11], [25, 11]];

    var diasFinales = 0;

    if (days >= 0) {

        for (var i = 0; i <= days; i++) {
            fecha.setDate(fecha.getDate() + 1);
            if (fecha.getDay() == 0 || fecha.getDay() == 6) {
                diasFinales++;
            }
        }

        fecha.setDate(fecha.getDate() - 1);

        for (var j = 0; j < arrayFestivos.length; j++) {
            if ((fecha.getMonth() == arrayFestivos[j][1]) && (fecha.getDate() == arrayFestivos[j][0])) {
                diasFinales++;
            }
        }

        days += diasFinales;

    } else {
        for (var i = 0; i >= days; i--) {
            fecha.setDate(fecha.getDate() - 1);
            if (fecha.getDay() == 0 || fecha.getDay() == 6) {
                diasFinales++;
            }
        }

        for (var j = 0; j < arrayFestivos.length; j++) {
            if ((fecha.getMonth() == arrayFestivos[j][1]) && (fecha.getDate() == arrayFestivos[j][0])) {
                diasFinales++;
            }
        }

        days -= diasFinales;
    }

    fechaFinal.setDate(fechaFinal.getDate() + days);

    if (fechaFinal.getDay() == 0) {
        fechaFinal.setDate(fechaFinal.getDate() - 2);
    } else if (fechaFinal.getDay() == 6) {
        fechaFinal.setDate(fechaFinal.getDate() - 1);
    }

    for (var j = 0; j < arrayFestivos.length; j++) {
        if ((fechaFinal.getMonth() == arrayFestivos[j][1]) && (fechaFinal.getDate() == arrayFestivos[j][0])) {
            fechaFinal.setDate(fechaFinal.getDate() + 1);
        }
    }

    return fechaFinal.toLocaleDateString("es-ES");
}

/*  Función que recibe dos fechas de tipo Date y devuelva el el número de días hábiles que hay entre las dos fechas.
    startdate: objeto Fecha inicio
    endDate: objeto Fecha inicio
    return número de días hábiles entre las dos fechas
*/

function getWorkingDays(startdate, endDate) {


    var resultado1 = new Date(startdate);
    var resultado2 = new Date(endDate);

    var arrayFestivos = [[1, 0], [6, 0], [1, 4], [15, 7], [12, 9], [1, 10], [6, 11], [8, 11], [25, 11]];

    var dias = 0;

    var diasNaturales = Math.round(Math.abs(resultado1.getTime() - resultado2.getTime()) / ((1000 * 60 * 60 * 24)));

    for (var i = 0; i < diasNaturales; i++, resultado1.setDate(resultado1.getDate() + 1)) {
        if (resultado1.getDay() == 0 || resultado1.getDay() == 6) {
            dias++;
        }
    }

    for (var j = 0; j < arrayFestivos.length; j++) {
        if ((resultado1.getMonth() == arrayFestivos[j][1]) && (resultado1.getDate() == arrayFestivos[j][0])) {
            dias++;
        }
    }

    if (resultado1 > resultado2) {
        return (-1 * (diasNaturales - dias));
    } else {
        return diasNaturales - dias;
    }

}
