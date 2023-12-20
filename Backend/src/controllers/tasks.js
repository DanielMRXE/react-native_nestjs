import {connect } from '../database'


export const getTasks = async (req, res) =>{
    const connection = await connect()
    const [rows] =await connection.query('SELECT * from task')
    res.json(rows)
};

export const getTask = async (req, res) =>{
    console.log(req.params.id)
    const connection = await connect();
    const [rows]= await connection.query('SELECT * FROM task WHERE id = ?',[
        req.params.id
    ])
res.json(rows[0])
}

export const getTaskCount = async (req, res) =>{
    const connection = await connect();
    const [rows]= await connection.query('SELECT COUNT(*) FROM task')
    console.log(rows);
    res.json({}) 
    
}

export const saveTask = async (req, res) =>{
    const connection = await connect();
    const [results] = await connection.query("INSERT INTO task(title, description) VALUES(?,?)", [
        req.body.title,
        req.body.description
    ])

    res.json({
        id: results.InsertId,
        ...req.body
    })

}

export const deleteTask = async (req, res) =>{
const connection = await connect();
const result = await connection.query("DELETE FROM task Where id= ?",[
    req.params.id,
]);
res.sendStatus(204);
}

export const updateTask = async (req, res) =>{
 const connection= await connect();
 await connection.query('UPDATE task set ? where id = ?', [
    req.body,
    req.params.id
 ])
 
 res.sendStatus(204)
}