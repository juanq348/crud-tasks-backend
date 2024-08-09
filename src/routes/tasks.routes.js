import { Router } from "express"
const router = Router()

import { agregarTarea, obtenerTarea, obtenerTareaID, eliminarTarea, actualizarTarea } from "../controllers/task.controllers.js"

router.post("/", agregarTarea)

router.get("/", obtenerTarea)

router.get("/:id", obtenerTareaID)

router.delete("/:id", eliminarTarea)

router.put("/:id", actualizarTarea)

export {router}