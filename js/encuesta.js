//funcion para poner play
function play() {
    var audio = document.getElementById("audio");
    audio.play();
}

//funcion para parar musica de fondo en caso de no querer que suene mas

function stop() {
    var audio = document.getElementById("musFondo");
    musFondo.pause();
    var silencio = document.getElementById("botonPlay")
    if (silencio) {
        document.getElementById('botonPlay').style.display = "block";
        document.getElementById('botonSilencio').style.display = "none";
    }

    console.log('para');
}



//funcion para parar musica de fondo en caso de no querer que suene mas

function play() {
    var audio = document.getElementById("musFondo");
    musFondo.play();
    var iniciar = document.getElementById("botonSilencio")
    if (iniciar) {
        document.getElementById('botonSilencio').style.display = "block";
        document.getElementById('botonPlay').style.display = "none";
    }


    console.log('inicia')
}



//funcion para los resultados de la casa

function casa() {
    var p1, p2, p3, resultado;

    //pregunt 1
    if (document.getElementById('check1').checked == true) { p1 = 1 } else if (document.getElementById('check2').checked == true) { p1 = 5 } else if (document.getElementById('check2').checked == true) { p1 = 10 } else { p1 = 20 }

    //pregunt 2
    if (document.getElementById('check1').checked == true) { p2 = 1 } else if (document.getElementById('check2').checked == true) { p2 = 5 } else if (document.getElementById('check2').checked == true) { p2 = 10 } else { p2 = 20 }

    //pregunt 3
    if (document.getElementById('check1').checked == true) { p3 = 1 } else if (document.getElementById('check2').checked == true) { p3 = 5 } else if (document.getElementById('check2').checked == true) { p3 = 10 } else { p1 = 20 }


    resultado = p1 + p2 + p3;
    if (resultado < 5) {
        console.log('Griffindor')
        window.open("/casaGriffindor/casa.html", '_self');
    } else if (resultado < 10) {
        console.log('Ravenclaw')
        window.open("/casaRavenclaw/casa.html", '_self');
    } else if (resultado < 20) {
        console.log('Hufflepuf')
        window.open("/casaHufflepuf/casa.html", '_self');
    } else {
        console.log('Slytherin')
        window.open("/casaSlytherin/casa.html", '_self');
    }



}