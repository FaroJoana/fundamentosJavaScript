//Para definir un prototipo, lo unico que necesitamos es una funcion.

function persona(nombre, apellido, altura) {
  this.nombre = nombre
  this.apellido = apellido
  this.altura = altura
}

persona.prototype.saludar = function(){
  console.log(`Hola me llamo ${this.nombre} ${this.apellido} `)
}

persona.prototype.soyAlto = function(){
  if (this.altura > 1.8 ){
    console.log('Soy alto')
  }else{
    console.log('No soy alto')
  }
}

//new, no puede ser usado como nombre de nada, es una palabra reservada en javascript y es para generar un nuevo objeto de un prototipo ya existente. En este caso, seria el nuevo objeto del prototipo persona.

var joana = new persona('Joana', 'Faro', 1.70)
var juan = new persona ('Juan', 'Perez', 1.85)
var luis = new persona ('Luis', 'Juarez', 1.75)
joana.saludar()
joana.soyAlto()// si o si para que aparezca la función.
