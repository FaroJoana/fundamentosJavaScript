// Map no modifica el arrays original, pero si nos centramos en un elemento, si lo modifica y cuando llamemos al arrays original nuevamente, este se vera afectado. Para que eso no pase, tenemos que retornar un nuevo objeto con la altura modificada.

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


const esAlta = ({ altura }) => altura > 1.8

var personasAltas = personas.filter(esAlta)

//  persona.altura = persona.altura * 100
// como vamos a devolver un objeto, no se puede escribir directamente el objeto, hay que poner () primero, devolviendolo.
const pasarAlturaACm = persona => ({
    ...persona,
    altura:  persona.altura * 100
  })

var personasCms = personas.map(pasarAlturaACm)

console.log(personasCms)
