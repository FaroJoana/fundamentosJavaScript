function heredaDe (prototipoHijo, prototipoPadre){
  var fn = function() {}
  fn.prototype = prototipoPadre.prototype
  prototipoHijo.prototype = new fn
  prototipoHijo.prototype.constructor = prototipoHijo
} 

function persona(nombre, apellido, altura) {
  this.nombre = nombre
  this.apellido = apellido
  this.altura = altura
}

persona.prototype.saludar = function(){
  console.log(`Hola me llamo ${this.nombre} ${this.apellido} `)
}


persona.prototype.soyAlto = function(){
  return this.altura > 1.8
}

function desarrollador (nombre, apellido) {
  this.nombre = nombre
  this.apellido = apellido
}

heredaDe(desarrollador, persona) // ejecutar la funcion de herencia antes de hacer la funcion de saludo, ya que sino primero se tiene en cuenta la primera que se hizo.

desarrollador.prototype.saludar = function (){
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador/a`)
}


var joana = new persona('Joana', 'Faro', 1.70)
var juan = new persona ('Juan', 'Perez', 1.85)
var luis = new desarrollador ('Luis', 'Juarez', 1.75)