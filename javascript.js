var nombres = ["Alexandro", "Amau", "Camilo", "Carlos", "Delfina", "Enric", "Erik", "Ferran", "Franco", "Janina", "Jason", "Kavan", "Manuela", "Nathalia", "Nellay", "Noelia", "Nuria", "Raul", "Sergi", "Shuangjie", "Solomon", "Unai", "Andres", "Thierry"];
var muertos = [];
var longitud;
var nomRandom;
var div;
var nuevoH1;
var texto;
var colocarH1;
var valorRandom;
var apariencia;
var fantasmas;
var animacion = document.getElementById("rejilla");

function desactivarAn() {

    setTimeout(function () {

        if (animacion.classList.contains('active')) {
            animacion.classList.remove("active");
        }
    }, 5000)

}

function checkDataBase() { 
    
    var testdata = document.getElementByID("colocar").outerHTML;
    console.log(testdata);
    $.ajax({
    url: "./functions/connnect.php",
    data: {
    example: testdata,
},
success: function( data ) {
    $( "muertos" ).html( "<strong>" + data + "</strong> " );
}
});

}

function reseleccionar() {

    if (!animacion.classList.contains("active")) {
        animacion.classList.add("active");
    }
    nomRandom = Math.floor(Math.random() * nombres.length);
    div = document.getElementById("colocar");


    if (typeof nombres !== 'undefined' && nombres.length > 0) {
        div.innerHTML = nombres[nomRandom];
    }

    for (var i = 0; i < nombres.length; i++) {
        console.log(nombres[nomRandom]);
        if (nombres[i] === nombres[nomRandom]) {
            var dato = nombres.splice(i, 1);
            muertos.push(dato);
        }
    }

    fantasmas();
    desactivarAn();
    checkDataBase();
}


function fantasmas() {
    console.log(apariencia);
    apariencia = document.getElementById("nombresLista");
    apariencia.innerHTML = "";
    for (var i = 0; i < muertos.length; i++) {
        apariencia.innerHTML += "<li>" + muertos[i] + "</li>";
        console.log[i];
    }
    console.log(fantasmas);
}



function reload() {
    window.location.reload();
}

reseleccionar();