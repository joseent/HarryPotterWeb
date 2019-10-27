var checkPassword = "sangre pura"


function logear() {
    let password = document.getElementById('password').value;
    console.log(password)


    if (password == checkPassword) {
        window.open("casa.html", "_system")

        console.log("hola")
    } else {
        window.open("/index.html")
    }
}