function corregir() {
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
        alert(" Palabra Secreta " + resultado);
    } else if (resultado < 10) {
        console.log(Slytherin)
        alert(" Palabra Secreta " + resultado);
    } else if (resultado < 20) {
        console.log(Hufflepuf)
        alert(" Palabra Secreta " + resultado);
    } else {
        console.log('RAvenclaw')
        alert(" Palabra Secreta " + resultado);
    }



}