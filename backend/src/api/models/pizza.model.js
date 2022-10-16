import { saveFilePizza, readFilePizza } from "../database/connection.js"

export const create = (pizza) => {

  let dados = JSON.parse(readFilePizza())
  dados.push(pizza)
  saveFilePizza(JSON.stringify(dados))

}

export const find = (name) => {

  const dados = JSON.parse(readFilePizza())
  return dados.filter(pizza => pizza.name.toLowerCase().includes(name.toLowerCase()))

}

export const destroy = (uuid) => {

  let dados = JSON.parse(readFilePizza())
  const item = dados.filter(pizza => {
    return pizza.id !== uuid
  })

  saveFilePizza(JSON.stringify(item))

}

export const update = (id, pizza) => {
  
  let dados = JSON.parse(readFilePizza())

  const item = dados.map(pza => {
    if(id === pza.id) {
      pza.name = pizza.name || pza.name
      pza.description = pizza.description || pza.description
      pza.price = pizza.price
      pza.ingredients = pizza.ingredients || pza.ingredients

    }
    return pza
  })

  saveFilePizza(JSON.stringify(item))

}
