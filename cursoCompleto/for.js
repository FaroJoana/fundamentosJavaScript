// Realizar tarea de manera repetitiva.

var joana = {
  nombre: 'Joana',
  apellido: 'Faro',
  edad: 23,
  peso: 70
}

console.log(`Al inicio del año ${joana.nombre} pesa ${joana.peso}kg`)

//function aumentarDePeso (persona){
//  return persona.peso += 200
//} igual a lo de abajo. 

const INCREMENTO_PESO = 0.2
const DIAS_DEL_ANIO = 365

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO

const adelgazar = persona => persona.peso -= INCREMENTO_PESO

for (var i = 1; i <= DIAS_DEL_ANIO; i++) {
  var random = Math.random()
  if (random < 0.25){
    aumentarDePeso(joana)
  }else if (random < 0.5){
    adelgazar(joana)
  }
}

// dentro de los (parte inicial; parte condicional; parte incremento). Entre las {} va el codigo que queremos que se repita.



console.log(`Al final del año ${joana.nombre} pesa ${joana.peso.toFixed(1)}kg`)