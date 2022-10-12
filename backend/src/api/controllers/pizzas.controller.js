import { v4 as uuidv4 } from "uuid"
import { createPizzaSchema } from "../validations/createPizzaSchema.js"

let DADOSPIZZAS = [{
  "id": "5a4bc4c6-fcc4-497b-b1f8-3f68e3af6441",
  "name": "Pizza numero 1",
  "description": "Pizza numero 1 descrição",
  "price": 100.01,
  "ingredients": [
    "Ingrediente 1",
    "Ingrediente 2",
    "Ingrediente 3"
  ]
}]

export function findPizza(request, response) {
  const nameqQuery = request.query.name || ""
  const pizzasFiltered = DADOSPIZZAS.filter(pizza => pizza.name.toLowerCase().includes(nameqQuery.toLowerCase()))
  return response.status(200).json(pizzasFiltered)
}

export function destroyPizza(request, response) {
  const { id } = request.params

  const item = DADOSPIZZAS.filter(pizza => {
    return pizza.id !== id
  })
  DADOSPIZZAS = item
  return response.status(200).json({ message: "Deletado com sucesso" })
}

export async function createPizza(request, response) {
  try {
    await createPizzaSchema.validate(request.body)

    const { name, description, price, ingredients } = request.body

    const pizza = {
      id: uuidv4(),
      name,
      description,
      price,
      ingredients,
    }
    DADOSPIZZAS.push(pizza)
    return response.status(201).json(pizza)
  } catch (error) {
    return response.status(400).json({ error: error.message })
  }
}