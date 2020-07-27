var joana = {
  nombre: 'Joana',
  apellido: 'Faro',
  edad: 23,
  ingeniero: true,
  cocinero: false,
  cantante: true,
  dj: false,
  guitarrista: false,
  estudiante: true
}

var juan = {
  nombre: 'Juan',
  apellido: 'Perez',
  edad: 17
}

//imprimirProfesiones(joana)

const MAYORIA_DE_EDAD = 18 // ya que no deberia variar su valor, no es tan variable, es una constante y se escribe de esta manera.

function esMayorDeEdad(persona){
  return persona.edad >= MAYORIA_DE_EDAD
}

function imprimirSiEsMayorDeEdad(persona){
  if (esMayorDeEdad(persona)){
    console.log(`${persona.nombre} es mayor de edad`)
  }else {
    console.log(`${persona.nombre} es menor de edad`)
  }
}

imprimirSiEsMayorDeEdad(joana)

