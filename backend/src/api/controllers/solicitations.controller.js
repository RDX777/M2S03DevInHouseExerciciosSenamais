import { v4 as uuidv4 } from "uuid"
import { createSolicitationsSchema } from "../validations/createSolicitationsSchema.js"

import { create, find, destroy, update } from "../models/solicititation.model.js"

export function findSolicitation(request, response) {
  const nameqQuery = request.query.name || ""
  const solicitationFiltered = find(nameqQuery)
  if (solicitationFiltered) {
    return response.status(200).json(solicitationFiltered)
  }
  return response.status(404).json({ message: "Nada foi localizado." })
}

export function destroySolicititation(request, response) {
  const { id } = request.params
  destroy(id)
  return response.status(200).json({ message: "Deletado com sucesso" })
}

export function updateSolicitation(request, response) {

  const { id } = request.params
  update(id, request.body)
  return response.status(200).json({ message: "Atualizado com sucesso" })
}

export async function updateOrderSolicitationHaCaminho(request, response) {
  const { id } = request.params
  update(id, {order : "HÁ CAMINHO"})
  return response.status(200).json({ message: "Atualizado com sucesso" })
}

export function updateOrderSolicitationFinalizado(request, response) {
  const { id } = request.params
  update(id, {order : "FINALIZADO"})
  return response.status(200).json({ message: "Atualizado com sucesso" })
}

export async function createSolicitation(request, response) {
  try {
    await createSolicitationsSchema.validate(request.body)

    const pedido = {
      id: uuidv4(),
      name: request.body.name,
      cpf: request.body.cpf,
      phone: request.body.phone,
      payment: request.body.payment,
      note: request.body.note,
      requestClient: request.body.requestClient,
      order: "EM PRODUÇÃO"
    }
    create(pedido)
    return response.status(201).json(pedido)
  } catch (error) {
    return response.status(400).json({ error: error.message })
  }
}
