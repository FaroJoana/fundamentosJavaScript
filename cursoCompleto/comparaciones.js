var x = 4, y = '4'

x == y // true 
x === y // false

var joana = {
  nombre: 'Joana'
}

//var otraPersona = {
//  nombre: 'Joana'
//}

joana == otraPersona // false
joana === otraPersona // false
// Si queremos que de true, el segundo objeto, deberia tener como valor el objeto de "joana". Sino, cada uno de los objetos es uno independiente y no son iguales. Al crear ya un nuevo objeto, va dar falso

var otraPersona = joana // si en este caso, modificamos el valor de otraPersona, tambien va a cambiarse en 'joana' ya que apuntan al mismo objeto y al mismo espacio en memoria ram. 