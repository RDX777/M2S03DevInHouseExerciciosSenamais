import { Router } from "express"

import { findAllSolicitations,
  findSolicitation,
  destroySolicititation,
  createSolicitation } from "../api/controllers/solicitations.controller.js"

const solicitationsRoutes = Router()

solicitationsRoutes.get("/solicitations", findAllSolicitations)

solicitationsRoutes.get("/solicitations/:id", findSolicitation)

solicitationsRoutes.delete("/solicitations/:id", destroySolicititation)

solicitationsRoutes.post("/solicitations", createSolicitation)

export default solicitationsRoutes
