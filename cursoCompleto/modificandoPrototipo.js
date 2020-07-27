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

var joana = new persona('Joana', 'Faro', 1.70)
var juan = new persona ('Juan', 'Perez', 1.85)
var luis = new persona ('Luis', 'Juarez', 1.75)


//Prototipo, un objeto mas en javascript
// No puede ponerse en cualquier lado cada funcion. 