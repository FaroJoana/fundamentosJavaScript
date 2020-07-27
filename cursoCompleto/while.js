var joana = {
  nombre: 'Joana',
  apellido: 'Faro',
  edad: 23,
  peso: 70
}

console.log(`Al inicio del año ${joana.nombre} pesa ${joana.peso}kg`)

const INCREMENTO_PESO = 0.3
const DIAS_DEL_ANIO = 365

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO

const adelgazar = persona => persona.peso -= INCREMENTO_PESO

const comeMucho = () => Math.random() < 0.3
const realizaDeporte = () => Math.random() < 0.4

const META = joana.peso - 3
var dias = 0

while (joana.peso > META) {
  if (comeMucho()) {
    aumentarDePeso(joana)
  } if (realizaDeporte()) {
    adelgazar(joana)
  }
  dias += 1
}
// se va a repetir el codigo mientras que la condicion sea verdadera.

console.log(`Pasaron ${dias} días hasta que ${joana.nombre} adelgazó 3kg`)