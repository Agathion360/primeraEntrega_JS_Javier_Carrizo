let year = 2023
let fNacimiento = ""
let mayor = true
let altura = ""
let peso = ""
let nombre = ""



console.log("escriba iniciar() para comenzar")

function iniciar() {
    nombre = prompt("ingrese su nombre").toUpperCase()


    while (mayor === true) {
        fNacimiento = parseInt(prompt("ingrese su año de nacimiento"))
        let edad = year - fNacimiento

        if (edad < 18) {
            mayor = confirm(nombre + ", usted es menor de edad")

        } else if (edad > 18) {

            altura = parseFloat(prompt("ingrese su altura en Metros:"))
            peso = parseFloat(prompt("ingrese su peso:"))
            mayor = false
            altura = altura ** 2
            calculo = peso / altura
            IMC(calculo.toFixed(2))
        }


    }

 function IMC(calculo) {
        if (calculo <= 18.5) {
            alert(nombre + " su peso menor al normal")
        } else if (calculo <= 24.9) {
            alert(nombre + " su peso es normal")
        } else if (calculo <= 29.5) {
            alert(nombre + " su peso es superior al normal")
        } else if (calculo <= 30.5) {
            alert(nombre + " usted tiene obesidad")
        } else {
            alert(nombre + " Usted tiene obesidad tipo II o mas, consulte a su medico")
        }
        reinicio()
    }
}

 function reinicio() {
        mayor = confirm("desea hacer otra consulta?")
        if (mayor === true) {
            iniciar()
        }
 }