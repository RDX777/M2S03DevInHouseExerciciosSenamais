import { Router } from "express"

import { findPizza, destroyPizza, createPizza } from "../api/controllers/pizzas.controller.js"

const pizzaRoutes = Router()

pizzaRoutes.get("/pizzas", findPizza)

pizzaRoutes.delete("/pizzas/:id", destroyPizza)

pizzaRoutes.post("/pizzas", createPizza)

export default pizzaRoutes