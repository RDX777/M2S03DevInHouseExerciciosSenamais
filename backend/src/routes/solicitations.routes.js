import { Router } from "express"

import {findSolicitation,
  destroySolicititation,
  updateSolicitation,
  updateOrderSolicitationHaCaminho,
  updateOrderSolicitationFinalizado,
  createSolicitation } from "../api/controllers/solicitations.controller.js"

const solicitationsRoutes = Router()

solicitationsRoutes.get("/solicitations", findSolicitation)

solicitationsRoutes.delete("/solicitations/:id", destroySolicititation)

solicitationsRoutes.post("/solicitations", createSolicitation)

solicitationsRoutes.put("/solicitations/:id", updateSolicitation)

solicitationsRoutes.patch("/solicitations/:id/changeordertohacaminho", updateOrderSolicitationHaCaminho)
solicitationsRoutes.patch("/solicitations/:id/changeorderfinalizado", updateOrderSolicitationFinalizado)

export default solicitationsRoutes
