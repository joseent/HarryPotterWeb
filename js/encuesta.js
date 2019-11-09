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
    switch (posicion) {
        case '0':

            break;
        case '1':
            break
        default:
            break;
    }






    console.log(p1);
    console.log(p2);
    console.log(p3);
    console.log(resultado);
    console.log(i);






    //pregunt 1
    if (document.getElementById('check1').checked == true) { p1 = 1 } else if (document.getElementById('check2').checked == true) { p1 = 5 } else if (document.getElementById('check3').checked == true) { p1 = 10 } else { p1 = 20 }

    //pregunt 2
    if (document.getElementById('check1').checked == true) { p2 = 1 } else if (document.getElementById('check2').checked == true) { p2 = 5 } else if (document.getElementById('check3').checked == true) { p2 = 10 } else { p2 = 20 }

    //pregunt 3
    if (document.getElementById('check1').checked == true) { p3 = 1 } else if (document.getElementById('check2').checked == true) { p3 = 5 } else if (document.getElementById('check3').checked == true) { p3 = 10 } else { p1 = 20 }


    resultado = p1 + p2 + p3;
    let nombreCasa;
    console.log(resultado);

    if (resultado < 5) {
        nombreCasa = 'gri';
    } else if (resultado < 10) {
        nombreCasa = 'rave';
    } else if (resultado < 20) {
        nombreCasa = 'huff';
    } else {
        nombreCasa = 'sly';
    }

    return nombreCasa;
}

function test() {
    let casa = obtenerCasa();
    console.log(casa);
    var botonModal = document.getElementById('botonModal');
    botonModal.setAttribute("data-target", '#' + casa);
    botonModal.click()
}