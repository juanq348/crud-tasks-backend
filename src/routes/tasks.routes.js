import { Router } from "express"
const router = Router()

import { agregarTarea, obtenerTarea, obtenerTareaID, eliminarTarea, actualizarTarea } from "../controllers/task.controllers.js"

import { validacionesTasks } from "../validations.js"
import { applyValidation } from "../applyValidation.js"
import { body } from "express-validator"

router.post("/", validacionesTasks, applyValidation, agregarTarea)

router.get("/", obtenerTarea)

router.get("/:id", obtenerTareaID)

router.delete("/:id", eliminarTarea)

router.put("/:id", actualizarTarea)

export {router}