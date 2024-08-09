import mysql2 from "mysql2/promise"

export const db = async() =>{
    const connection = await mysql2.createConnection({
        host:"localhost",
        user:"root",
        database:"tasks_db"
    })
    return connection
}