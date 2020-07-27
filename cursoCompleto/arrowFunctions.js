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

const MAYORIA_DE_EDAD = 18 

//var esMayorDeEdad = function (persona){
//  return persona.edad >= MAYORIA_DE_EDAD
//} // podemos a una variable asignarle una funcion y luego llamarla como una funcion normal.

//Ahora con un arrow, seria el >=. Si solo tiene un parametro se pueden sacar los parentesis. Se puede sacar la palabra return y las llaves. En el parametro, como solo queremos saber la edad, podemos sacar el parametro pesona y entre parentesis y llaves, poner edad.

const esMayorDeEdad = ({ edad }) => edad >= MAYORIA_DE_EDAD


function imprimirSiEsMayorDeEdad(persona){
  if (esMayorDeEdad(persona)){
    console.log(`${persona.nombre} es mayor de edad`)
  }else {
    console.log(`${persona.nombre} es menor de edad`)
  }
}

//imprimirSiEsMayorDeEdad(joana)

//function permitirAcceso(persona) {
//  if (!esMayorDeEdad(persona))
//  console.log('ACCESO DENEGADO')
//}

const esMenorDeEdad = ({ edad }) => !esMayorDeEdad({ edad })

function permitirAcceso(persona){
  if(esMenorDeEdad(persona)){
    console.log('Acceso Denegado')
  }else{
    console.log('Acceso Permitido')
  }
}