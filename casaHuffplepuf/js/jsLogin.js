var checkPassword = "honestidad"

function logear(e) {
    e.preventDefault();
    let password = document.getElementById('password').value;
    if (password == checkPassword) {
        window.open("casaH.html", "_self")

        console.log("hola")
    } else {
        console.log('INCORECTA')
        document.getElementById('alerta').style.display = "block"
    }
}