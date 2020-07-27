var nombre = 'Joana'

//function imprimirNombreEnMayusculas() {
//  nombre = nombre.toUpperCase()
//  console.log(nombre)
//}

//imprimirNombreEnMayusculas()

//Para evitar que el llamado de nuestra funcion, cambie la variable global, es mejor hacerlo de esta manera:

function imprimirNombreEnMayusculas(n) {
  n = n.toUpperCase()
  console.log(n)
}

imprimirNombreEnMayusculas(nombre)

//De esta manera, evitamos que la funcion cambie nuestra variable global. n es una variable local, que solo funciona dentro de la funcion. Aunque el parametro se llame nombre en vez de n, nada modifica, ya que el parametro nombre va a estar en el alcance local, y la variable en el alcance global.
