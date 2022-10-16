import { Router } from "express"

import { findPizza, destroyPizza, createPizza, updatePizza } from "../api/controllers/pizzas.controller"

const pizzaRoutes = Router()

pizzaRoutes.get("/pizzas", findPizza)

pizzaRoutes.delete("/pizzas/:id", destroyPizza)

pizzaRoutes.post("/pizzas", createPizza)

pizzaRoutes.put("/pizzas/:id", updatePizza)

export default pizzaRoutes