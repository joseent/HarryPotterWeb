
function corregir() {
    var p1, p2, p3, p4, p5, p6, nota;

    //pregunt 1
    if (document.getElementById('p1').checked == true) {p1=1}
    else {p1=0}
    
    //pregunt 2
    if (document.getElementById('p2').checked == true) {p2=1}
    else {p2=0}

    //pregunt 3
    if (document.getElementById('p3').checked == true) {p3=1}
    else {p3=0}

    //pregunt 4
    if (document.getElementById('p4').checked == true) {p4=1}
    else {p4=0}

    //pregunt 5
    if (document.getElementById('p5').checked == true) {p5=1}
    else {p5=0}

    //pregunt 6
    if (document.getElementById('p6').checked == true) {p6=1}
    else {p6=0}
    




    nota=p1+p2+p3+p4+p5+p6;
    console.log(nota)
    alert(" Aciertos: " + nota);
}








//var rangoSuperior = 100;
//var rangoInferior = 0;
//var aleatorio = Math.floor(Math.random()*(rangoSuperior-(rangoInferior-1))) + rangoInferior;

//alert(aleatorio);
