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