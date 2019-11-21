var audioF = document.getElementById("musFondo");
//funcion para poner play
function playy() {
    var audio = document.getElementById("audio");
    audio.play();
    audioF.pause();
}

//funcion para parar musica de fondo en caso de no querer que suene mas

function stop() {
    audioF.pause();
    var silencio = document.getElementById("botonPlay")
    if (silencio) {
        document.getElementById('botonPlay').style.display = "block";
        document.getElementById('botonSilencio').style.display = "none";
    }

    console.log('para');
}



//funcion para parar musica de fondo en caso de no querer que suene mas

function play() {
    audioF.play();
    var iniciar = document.getElementById("botonSilencio")
    if (iniciar) {
        document.getElementById('botonSilencio').style.display = "block";
        document.getElementById('botonPlay').style.display = "none";
    }


    console.log('inicia')
}



//funcion para los resultados de la casa

function obtenerCasa() {
    var resultado = [];
    var p1 = [];
    var p2 = [];
    var p3 = [];

    for (let i = 1; i <= 12; i++) {
        var element = document.getElementById(`check${i}`).checked;
        var valor = 0;
        if (element === true) {
            valor = 1;
        }
        if (i <= 4) {
            p1.push(valor);
        }
        if (i >= 5 && i <= 8) {
            p2.push(valor);
        }
        if (i >= 9) {
            p3.push(valor);
        }
    }

    for (let i = 0; i < 4; i++) {
        var suma = p1[i] + p2[i] + p3[i];
        resultado[i] = suma;
    }
    let posicion = resultado.indexOf(Math.max(...resultado));
    posicion = posicion.toString();
    let nombreCasa;
    switch (posicion) {
        case '0':
            nombreCasa = 'gri';
            break;
        case '1':
            nombreCasa = 'rave';
            break
        case '2':
            nombreCasa = 'huff';
            break
        case '3':
            nombreCasa = 'sly';
            break
        default:
            break;
    }
    return nombreCasa;
}

function test() {
    let casa = obtenerCasa();
    console.log(casa);
    var botonModal = document.getElementById('botonModal');
    botonModal.setAttribute("data-target", '#' + casa);
    botonModal.click();
}