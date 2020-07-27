class persona {
  constructor(nombre, apellido, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
  }
  saludar(){
    console.log(`Hola me llamo ${this.nombre} ${this.apellido} `)
  }
  soyAlto(){
    return this.altura > 1.8
 }
}

class desarrollador extends persona {
  constructor(nombre, apellido, altura){
    super(nombre, apellido, altura)
    //this.nombre = nombre
    //this.apellido = apellido
    //this.altura = altura. Esto no se pone mas ya que al llamar a super, estamos invocando los elementos de persona, su padre.
  }

  saludar(){
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador/a`)
  }
}

//var joana = new persona('Joana', 'Faro', 1.70)
//var juan = new persona ('Juan', 'Perez', 1.85)
//var luis = new desarrollador ('Luis', 'Juarez', 1.75)