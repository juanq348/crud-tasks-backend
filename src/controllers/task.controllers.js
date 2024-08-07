const {newConnection} = require("../db.js")

const agregarTarea = async (req, res) =>{
    console.log(req.body)
    const connection = await newConnection()
    
    const {title, description, isComplete} = req.body

    if(typeof title !== 'string' || title.trim() === '' || title.length > 255){
        return res.status(400).json({msg:"El título no debe estar vacío y debe tener menos de 255 caracteres"})
    }

    if(typeof description !== 'string' || description.trim() === ''){
        return res.status(400).json({msg:"La descripción no debe ser vacío"})
    }

    if(typeof isComplete !== 'boolean'){
        return res.status(400).json({msg:"isComplete tiene que ser Booleano"})
    }

    await connection.query(`INSERT INTO tasks(title, description, isComplete) VALUES(?,?,?)`, [title, description, isComplete])
    res.send("Se agregaron los datos correctamente")

    connection.end()
}

const obtenerTarea = async (req,res) => {
    const connection = await newConnection()
    const results = await connection.query(`SELECT * FROM tasks`)
    res.json(results[0])
    connection.end()
}

const obtenerTareaID = async(req,res) =>{
    const connection = await newConnection()
    const taskID = req.params.id

    const results = await connection.query(`SELECT * FROM tasks WHERE id = ?`, taskID)
    res.status(200).json(results[0])
    connection.end()
}

const eliminarTarea = async(req,res) =>{
    const connection = await newConnection()
    const taskID = req.params.id

    await connection.query(`DELETE FROM tasks WHERE id = ?`, [taskID])
    res.status(200).json({msg:"Tarea eliminada con éxito"})
    connection.end()
}

const actualizarTarea = async(req,res) =>{
    const connection = await newConnection()
    const taskID = req.params.id
    const {title, description, isComplete} = req.body

    if(typeof title !== 'string' || title.trim() === '' || title.length > 255){
        return res.status(400).json({msg:"El título no debe estar vacío y debe tener menos de 255 caracteres"})
    }

    if(typeof description !== 'string' || description.trim() === ''){
        return res.status(400).json({msg:"La descripción no debe ser vacío"})
    }

    if(typeof isComplete !== 'boolean'){
        return res.status(400).json({msg:"isComplete tiene que ser Booleano"})
    }

    await connection.query(`UPDATE tasks SET title = ?, description = ?, isComplete = ? WHERE id = ?`, [title, description, isComplete, taskID])
    res.status(200).json({msg:"Tarea editada con éxito"})
    connection.end()
}

module.exports = {
    agregarTarea,
    obtenerTarea,
    obtenerTareaID,
    eliminarTarea,
    actualizarTarea
}