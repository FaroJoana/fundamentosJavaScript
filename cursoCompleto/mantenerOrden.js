const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'

const opts = { crossDomain: true}

function obtenerPersonaje(id, callback) {
  const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
  $.get( url, opts,  function(persona){
    console.log(`Hola, yo soy ${persona.name}`)
    if (callback) {
      callback()
    }
  })
}

obtenerPersonaje(1, function(){
  obtenerPersonaje(2, function (){
    obtenerPersonaje(3, function(){
      obtenerPersonaje(4, function(){
        obtenerPersonaje(5, function(){
          obtenerPersonaje(6)
        })
      })
    })
  })
})

//La function del callback lo que hace es garantizar que se respete el orden. Dentro de la funcion se pone el personaje 2 para que la funcion retrase el llamado del segundo personaje y se respete el orden. Si no ponemos la funcion, se llama automaticamente al personaje 2, y ese se vuelve el 1. Si no llamamos al callback dentro de la funcion, no nos va a aparecer. Ahora los request se hacen en serie y no en paralelo. 