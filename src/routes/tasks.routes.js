const {Router} = require("express")
const router = Router()

const {agregarTarea, obtenerTarea, obtenerTareaID, eliminarTarea, actualizarTarea} = require("../controllers/task.controllers.js")

router.post("/tasks", agregarTarea)

router.get("/tasks", obtenerTarea)

router.get("/tasks/:id", obtenerTareaID)

router.delete("/tasks/:id", eliminarTarea)

router.put("/tasks/:id", actualizarTarea)

module.exports = router