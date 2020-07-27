//Promesas, valores que aun no conocemos. Nos solucionan el problema de un callback dentro de otro callback.
// Cuando creamos una promesa, esta en estado de pending, una vez que se resuelve pasa al estado de fulfilled, pero si hay un problema pasan al estado de rejected. Para obtener el valor de la resolcion, tenemos que llamar a la funcion .then. Si hay un problema, y se rechaza a la promesa, se llama a la funcion ().catch).
//Se crea como new Promise (function(resolve,reject){
  //..
// }).then(valor=>{
// ...
// }).catch(err=>{
// ...
// })

const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'

const opts = { crossDomain: true}

function obtenerPersonaje(id) {
  return new Promise((resolve,reject) => {
    const url = `${API_URL}${PEOPLE_URL.replace(':id' , id)}`
    $.get( url, opts, function(data){
      resolve(data)
    })
    .fail(() => reject (id))
  }) 
 }
  
  
function onError(id){
  console.log(`Sucedió un error al obtener el personaje ${id}`)
}

  obtenerPersonaje(1)
  .then(function(personaje){
    console.log(`El personaje 1 es ${personaje.name}`)
  })

  .catch(onError)
