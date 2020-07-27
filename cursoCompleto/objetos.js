var joana = {
  nombre: 'Joana',
  apellido: 'Faro',
  edad: 23
} //El objeto esta formado por clave y valor.

var gonzalo = {
  nombre: 'Gonzalo',
  apellido: 'Faro',
  edad: 33
}

//function imprimirNombreEnMayusculas/(persona) {
//  var nombre = persona.nombre.toUpperCase()
//  console.log(nombre)
//}

//imprimirNombreEnMayusculas(joana)
//imprimirNombreEnMayusculas(gonzalo)
// Otra manera


//function imprimirNombreEnMayusculas(persona) {
  // console.log(persona.nombre.toUpperCase())
 //}

 //imprimirNombreEnMayusculas(joana)
 //imprimirNombreEnMayusculas(gonzalo)
//Otra manera

//function imprimirNombreEnMayusculas({ nombre }) {
//   console.log(nombre.toUpperCase())
// }

// imprimirNombreEnMayusculas(joana)
// imprimirNombreEnMayusculas(gonzalo)
// imprimirNombreEnMayusculas({ nombre: 'Pepito' })

 //Aca ponemos entre llaves el unico atributo que nos interesa del objeto. Mismo al momento de imprimir la funcion, podemos agregar otro nombre. Si se intenta obtener otro objeto, otro atributo como por ejemplo el apellido, va a dar error ya que el parametro es nombre y solo se va a poder acceder al atributo nombre. 

 // Desestructurar objetos:

 function imprimirNombreEnMayusculas(persona) {
 var nombre = persona.nombre
   var { nombre } = persona
  console.log(nombre.toUpperCase())
}

imprimirNombreEnMayusculas(joana)
imprimirNombreEnMayusculas(gonzalo)
imprimirNombreEnMayusculas({ nombre: 'Pepito' })

function imprimirNombreYEdad (persona) {
  var { nombre } = persona
  var { edad } = persona
  console.log(`Hola mi nombre es ${ nombre } y tengo ${ edad } años`)
}

//imprimirNombreYEdad(joana)
//imprimirNombreYEdad(gonzalo)

//function cumpleaños(persona) {
//  persona.edad += 1
//}

// De esta manera, el valor se ve modificado, a medida que se llama a esta funcion, va incrementando su valor de 1 en 1.

function cumpleaños(persona){
  return {
    ...persona,
    edad: persona.edad + 1
  }
}
// con los 3 puntos, llamamos a todo el objeto dentro de la función.
//De esta manera, el objeto principal no se ve afectado y solo se afecta cuando se llama a la funcion. 

var joanaMasVieja = cumpleaños(joana) //Nuevo objeto con el dato modificado

joana // objeto original sin modificaciones. 