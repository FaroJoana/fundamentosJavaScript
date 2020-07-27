var edad = 23;

//edad= edad + 1; esto es igual a lo de abajo. 

edad += 1 

var peso = 75

//peso = peso - 2

peso -= 2

var sandwich = 1

//peso = peso + sandwich

peso += sandwich

var jugarAlFutbol = 3

//peso = peso - jugarAlFutbol

peso -= jugarAlFutbol

var precioDeVino = 200.3

//var total = precioDeVino * 3 Como javascript no trabaja bien con decimales, de esta manera nos queda un numero muy extraño.

//var total = precioDeVino * 100 * 3 / 100

var total = Math.round(precioDeVino * 100 * 3) / 100

var totalStr = total.toFixed(2) // que se lean 2 decimales despues de la coma.

var totalStr2 = total.toFixed(3) // que se lean 3 decimales despues de la coma. 

var total2 = parseFloat(totalStr2) // pasar el total string a numeros nuevamente. 

var pizza = 8

var persona = 2

var cantidadPorcionesPersona = pizza / persona 