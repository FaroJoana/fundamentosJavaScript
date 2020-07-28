const joana = {
  nombre: 'Joana',
  apellido: 'Faro'
}
const laura = {
  nombre: 'Laura',
  apellido: 'Perez'
}

function saludar (saludo = 'Hola'){
  console.log(`${saludo}, mi nombre es ${this.nombre}`)
}

//const saludarAJoana = saludar.bind(joana)
//const saludarALaura = saludar.bind(laura)

//setTimeout(saludar.bind(joana, 'Hola che'), 1000)

//saludar.call(joana, 'Hola che')

saludar.apply(joana, ['Hola che'])// sus parametros se agregan con un array.