// Ejercicio 1

const ConsultaIngredientes = () => {
  const resultado = sandwichOrders.filter(
    sandiwchOrder => sandiwchOrder.ingredients.includes('palta') && sandiwchOrder.ingredients.includes('lechuga'))
  return resultado
}

// Ejercicio 2
const encontrarID = (id) => {
  let arregloSanwich = null
  arregloSanwich = sandwichOrders.find((sandwichOrder) => sandwichOrder.id === id)
  if(arregloSanwich == null){
    return `No se encontró la orden con id ${id}`
  }else{
    const {ordered,protein,bread} = arregloSanwich
    return `La orden fue realizada el ${ordered}, la orden llevó ${protein} y ${bread}`
  }
}

// Ejercicio 3
const encontrarIDPepinillos = (id) =>{
  let resultado = null
  resultado  = sandwichOrders.find(
    sandiwchOrder => sandwichOrders.id === id && sandiwchOrder.ingredients.includes('pepinillos')
  )
  if(resultado == null){
    return false
  }else{
    return true
  }
}

// Ejercicio 4
const encontrarPorFechas = (fecha) => {
  const arregloSanwich = sandwichOrders.filter((sandwichOrder) => sandwichOrder.ordered === fecha)
  return `Se encontraron ${arregloSanwich.length} ordenes para la fecha ${fecha}`
}