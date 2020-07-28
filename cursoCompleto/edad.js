function diferenciaEntreFechas(fecha1, fecha2){
  const unDia = 1000 * 60 * 60 * 24
  const diferencia = Math.abs(fecha1 - fecha2)// math.abs nos da el valor absoluto del numero. si es negativo, lo vuelve positivo

  return Math.floor(diferencia / unDia)// redondea para abajo.
}

const hoy = new Date()
const nacimiento = new Date (1997, 2, 11)


