import express, { json } from "express"
import { router } from "./routes/tasks.routes.js"
const app = express()

app.use(json())
app.use("/tasks", router)

app.listen(3000, console.log("El servidor esta funcionando correctamente"))