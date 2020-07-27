const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'

const opts = { crossDomain: true}

const onPeopleResponse = function(persona){
  console.log(`Hola, yo soy ${persona.name}`)
}

function obtenerPersonaje(id) {
  const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
  $.get( url, opts, onPeopleResponse )
}

obtenerPersonaje(1)
obtenerPersonaje(2)
obtenerPersonaje(3)
//Llega primero el numero 3, despues el 2 y despues el 1. Esto es porque esta el asincronismo de Javascript. No sabemos en que orden nos van a llegar las respuestas. Ya que son multiples metodos asincronicos, entonces no sabemos en que orden va a ir resolviendo los request.

//Callbacks. funcion que se va a ejecutar en algun futuro y el $.get, va a ser el encargado de llamarla. Una vez que el request se termina, la funcion se llama. Puede que nunca se llame. Con arguments, podemos ver con un arrays, los parametros que confroman a una funcion. 