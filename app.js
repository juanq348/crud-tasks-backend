const express = require("express")
const app = express()

const {newConnection} = require("./db")
app.use(express.json())

app.post("/tasks", async (req, res) =>{
    console.log(req.body)
    const connection = await newConnection()
    
    const {title, description, isComplete} = req.body
    await connection.query(`INSERT INTO tasks(title, description, isComplete) VALUES(?,?,?)`, [title, description, isComplete])
    res.send("Se agregaron los datos correctamente")

    connection.end()
})

app.get("/tasks", async (req,res) => {
    const connection = await newConnection()
    const results = await connection.query(`SELECT * FROM tasks`)
    res.json(results[0])
    connection.end()
})

app.get("/tasks/:id", async(req,res) =>{
    const connection = await newConnection()
    const taskID = req.params.id

    const results = await connection.query(`SELECT * FROM tasks WHERE id = ?`, taskID)
    res.status(200).json(results[0])
    connection.end()
})

app.delete("/tasks/:id", async(req,res) =>{
    const connection = await newConnection()
    const taskID = req.params.id

    await connection.query(`DELETE FROM tasks WHERE id = ?`, [taskID])
    res.status(200).json({msg:"Tarea eliminada con éxito"})
    connection.end()
})

app.put("/tasks/:id", async(req,res) =>{
    const connection = await newConnection()
    const taskID = req.params.id
    const {title, description, isComplete} = req.body

    await connection.query(`UPDATE tasks SET title = ?, description = ?, isComplete = ? WHERE id = ?`, [title, description, isComplete, taskID])
    res.status(200).json({msg:"Tarea editada con éxito"})
    connection.end()
})

app.listen(3000, console.log("El servidor esta funcionando correctamente"))