var joana = {
  nombre: 'Joana',
  apellido: 'Faro',
  altura: 1.60,
  cantidadDeLibros: 120
}

var alan = {
  nombre: 'Alan',
  apellido: 'Perez',
  altura: 1.86,
  cantidadDeLibros: 90
}

var martin = {
  nombre: 'Martin',
  apellido: 'Gomez',
  altura: 1.85,
  cantidadDeLibros: 75
}

var dario = {
  nombre: 'Dario',
  apellido: 'Juarez',
  altura: 1.71,
  cantidadDeLibros: 135
}

var vicky = {
  nombre: 'Vicky',
  apellido: 'Zapata',
  altura: 1.56,
  cantidadDeLibros: 110
}

var paula = {
  nombre: 'Paula',
  apellido: 'Barros',
  altura: 1.76,
  cantidadDeLibros: 103
}

var personas = [joana, alan, martin, dario, vicky, paula]

//var acumulador = 0

//for(var i = 0; i < personas.length; i++){
//  acumulador = acumulador + personas[i].cantidadDeLibros
//}

const reducer = (acum, {cantidadDeLibros}) => acum + cantidadDeLibros

var totalDeLibros = personas.reduce(reducer, 0) // funcion reducer, y contador que comienza en 0

  console.log(`En total todos tienen ${totalDeLibros} libros`)

