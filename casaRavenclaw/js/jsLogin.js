var checkPassword = "sangrepura"

function logear(e) {
    e.preventDefault();
    let password = document.getElementById('password').value;
    if (password == checkPassword) {
        window.open("casa.html", "_self")

        console.log("hola")
    } else {
        console.log('INCORECTA')
        document.getElementById('alerta').style.display = "block"
    }
}