class persona {
  constructor(nombre, apellido, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
  }
  saludar(fn) {
    var { nombre, apellido } = this
    console.log(`Hola me llamo ${nombre} ${apellido} `)
    if (fn) {
      fn(nombre, apellido)// si no ponemos el parametro de esDev, va a ser falso y por ende no se ejecuta el saludo al desarrollador.
    }
  }
  soyAlto(){
    return this.altura > 1.8
 }
}

class desarrollador extends persona {
  constructor(nombre, apellido, altura){
    super(nombre, apellido, altura)
  }

  saludar(fn){
    //var nombre = this.nombre
    //var apellido = this.apellido
    var { nombre, apellido } = this
    console.log(`Hola, me llamo ${nombre} ${apellido} y soy desarrollador/a`)
    if (fn) {
      fn(nombre, apellido, true)
    }
  }
}

function responderSaludo (nombre, apellido, esDev ) {
  console.log(`Buen día ${nombre} ${apellido}`)
  if (esDev){
    console.log(`ah mirá, no sabía que eras desarrollador/a`)
  }
}

var joana = new persona('Joana', 'Faro', 1.70)
var juan = new persona ('Juan', 'Perez', 1.85)
var luis = new desarrollador ('Luis', 'Juarez', 1.75)

joana.saludar()
juan.saludar(responderSaludo)
luis.saludar(responderSaludo)
