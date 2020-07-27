var contador = 0

const llueve = () => Math.random() < 0.25

do {
  contador++
} while(!llueve())

var frecuencia = contador === 1 ? "vez" : "veces";

console.log(`Fui a ver si llovía ${contador} ${frecuencia}`)

// si la condicion del while se cumple, el codigo se vuelve a ejecutar. Pero al menos 1 vez se va a ejecutar si o si.

// con el ? es como hacer un if. si esa condicion se cumple, se imprime la palabra vez, y sino se imprime veces. los : serian como el else. 