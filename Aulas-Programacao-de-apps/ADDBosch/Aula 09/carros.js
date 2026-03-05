const vehicles = require("./carrosData.json")

// soma dos preços
const somaPrecos = vehicles.reduce((acc, value) => {
  return acc + value.price_brl
}, 0)

// média de preços
const mediaPrecos = somaPrecos / vehicles.length

// preço máximo
const precoMax = vehicles.reduce((max, v) => 
  v.price_brl > max ? v.price_brl : max, vehicles[0].price_brl)

// preço mínimo
const precoMin = vehicles.reduce((min, v) => 
  v.price_brl < min ? v.price_brl : min, vehicles[0].price_brl)

// média de potência
const mediaPotencia = vehicles.reduce((acc, v) => 
  acc + v.horsepower, 0) / vehicles.length

// apenas SUVs
const suvs = vehicles.filter(v => v.category === "SUV")

// apenas carros elétricos
const carrosEletr = vehicles.filter(v => v.fuel === "Elétrico")

// lista de marcas
const marcas = vehicles.map(v => v.brand)

// carro mais pesado
const maisPesado = vehicles.reduce((max, v) =>
  v.weight_kg > max.weight_kg ? v : max
)

// carros econômicos (>12 km/l)
const economicos = vehicles.filter(v => v.city_km_l > 12)


// RESULTADOS
console.log("Soma dos preços:", somaPrecos.toFixed(2))
console.log("Média dos preços:", mediaPrecos.toFixed(2))
console.log("Preço máximo:", precoMax)
console.log("Preço mínimo:", precoMin)
console.log("Média de potência:", mediaPotencia.toFixed(2))
console.log("SUVs:", suvs)
console.log("Carros elétricos:", carrosEletr)
console.log("Marcas:", marcas)
console.log("Carro mais pesado:", maisPesado)
console.log("Carros econômicos (>12 km/l):", economicos)