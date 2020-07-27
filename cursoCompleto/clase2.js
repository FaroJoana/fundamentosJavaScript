var nombre = 'Joana', apellido = 'Faro'

var nombreEnMayusculas = nombre.toUpperCase()

var apellidoEnMinusculas = apellido.toLowerCase()

var primeraLetraDelNombre = nombre.charAt(0)

var cantidadDeLetrasDelNombre = nombre.length

var nombreCompleto = nombre + ' ' + apellido

var nombreCompleto2 = `${nombre} ${apellido.toUpperCase()}`

var stringDelString = nombre.charAt(1) + nombre.charAt(2);

var stringDelString2 = nombre.substr(1, 2) // primer numero, es el lugar de partida, segundo numero, es la cantidad de caracteres que queremos que nos muestre. 

var ultimaLetra = nombre.charAt(4)