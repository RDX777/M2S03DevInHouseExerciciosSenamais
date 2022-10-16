import { v4 as uuidv4 } from "uuid"
import { createPizzaSchema } from "../validations/createPizzaSchema.js"

import { create, find, destroy, update } from "../models/pizza.model.js"

export function findPizza(request, response) {
  const nameqQuery = request.query.name || ""
  const pizzasFiltered = find(nameqQuery)
  return response.status(200).json(pizzasFiltered)
}

export function destroyPizza(request, response) {
  const { id } = request.params
  destroy(id)
  return response.status(200).json({ message: "Deletado com sucesso" })
}

export function updatePizza(request, response) {

  const { id } = request.params
  update(id, request.body)
  return response.status(200).json({ message: "Atualizado com sucesso" })
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

    create(pizza)

    return response.status(201).json(pizza)
  } catch (error) {
    return response.status(400).json({ error: error.message })
  }
}