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

function imprimirProfesiones(persona){
  console.log(`${persona.nombre} es : `)
 if (persona.ingeniero){
  console.log('Ingeniero')
}if (persona.cocinero){
  console.log('Cocinero')
}if (persona.cantante){
  console.log('Cantante')
}if (persona.dj){
  console.log('Dj')
}if (persona.guitarrista){
  console.log('Guitarrista')
}if (persona.estudiante){
  console.log('Estudiante')
  }
}
imprimirProfesiones(joana)

function imprimirSiEsMayorDeEdad(persona){
  if (persona.edad >= 18){
    console.log(`${persona.nombre} es mayor de edad`)
  }else{
    console.log(`${persona.nombre} es menor de edad`)
  }
}

imprimirSiEsMayorDeEdad(joana)