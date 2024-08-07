const express = require("express")
const app = express()

app.use(express.json())

app.use(require("./routes/tasks.routes.js"))

app.listen(3000, console.log("El servidor esta funcionando correctamente"))