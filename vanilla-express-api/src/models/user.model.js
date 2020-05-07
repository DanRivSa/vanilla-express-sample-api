//import db connection pool
const db = require('../database/db.config');

class UserModel
{
    
    async getUsers(req,res)
    {
        const db_res = await db.query('SELECT * FROM users ORDER BY id ASC');
        res.send(db_res.rows);
    }

    async getUserById(id,req,res)
    {
        const db_res = await db.query('SELECT * FROM users WHERE id = $1',[id]);
        res.status(200).send(db_res.rows);
    }

    async postUser(req,res)
    {
        const db_res = await db.query('INSERT INTO users (first_name,last_name,username) VALUES($1,$2,$3)',[req.body.name,req.body.lastname,req.body.username]);
        res.status(200).send('user created!');
    }

    async deleteUser(req,res,id)
    {
        //find user by id
        const db_res = await db.query('DELETE FROM users WHERE id = $1',[id]);
        res.send(`USER ${id} HAS BEEN DELETED`);
    }

    async updateUser(req,res)
    {
        const name = req.body.name;
        const lastname = req.body.lastname;
        const username = req.body.username;
        const id = req.params.id;
        const db_res = await db.query('UPDATE users SET first_name=$1, last_name = $2, username = $3 WHERE id = $4',[name,lastname,username,id]);
        res.status(200).send(`USER ${id} HAS BEE UPDATED`);

    }
}

module.exports = UserModel;