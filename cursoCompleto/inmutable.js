const joana = {
  nombre: 'Joana',
  apellido: 'Faro',
  edad: 23
}

const cumpleaniosInmutable = persona => ({
  ...persona,
  edad: persona.edad + 1
})

//De esta manera, hacemos que el objeto principal no sea modificado. Creamos un objeto nuevo el cual va ir siendo modificado.