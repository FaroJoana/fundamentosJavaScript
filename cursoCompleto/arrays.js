//Estructura de datos donde agrupamos información.

var joana = {
  nombre: 'Joana',
  apellido: 'Faro',
  altura: 1.60
}

var alan = {
  nombre: 'Alan',
  apellido: 'Perez',
  altura: 1.86
}

var martin = {
  nombre: 'Martin',
  apellido: 'Gomez',
  altura: 1.85
}

var dario = {
  nombre: 'Dario',
  apellido: 'Juarez',
  altura: 1.71
}

var vicky = {
  nombre: 'Vicky',
  apellido: 'Zapata',
  altura: 1.56
}

var paula = {
  nombre: 'Paula',
  apellido: 'Barros',
  altura: 1.76
}

var personas = [joana, alan, martin, dario, vicky, paula]

//personas[0]['altura']
//personas[0].altura

//for (var i = 0; i < personas.length; i++){
  //var persona = personas[i]
  //console.log(`${persona.nombre} mide ${persona.altura} metros`)
//}


//filtrar elementos. Para filtrar siempre necesitamos dos cosas, un arrays y una condicion y esa condicion va a ser una funcion.

const esAlta = ({ altura }) => altura > 1.8

var personasAltas = personas.filter(esAlta)

//var personasAltas = personas.filter(function(persona){
  //return persona.altura > 1.8
//})

console.log(personasAltas)

