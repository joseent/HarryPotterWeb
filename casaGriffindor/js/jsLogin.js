var checkPassword = "fortunamajor"

function logear(e) {
    e.preventDefault();
    let password = document.getElementById('password').value;
    if (password == checkPassword) {
        window.open("casaG.html", "_self")

        console.log("hola")
    } else {
        console.log('INCORECTA')
        document.getElementById('alerta').style.display = "block"
    }
}