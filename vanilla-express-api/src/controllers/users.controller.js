//import model
const Model = require('../models/user.model');
const model = new Model(); //model init

class UserController
{
    //crud opertations   
    getUsers = (req,res)=>
    {
        model.getUsers(req,res);
        
    }
    
    getUserById = (req,res)=>
    {
        const id = req.params.id;
        model.getUserById(id,req,res);
    }
    
    postUser = (req,res) =>
    {
        model.postUser(req,res);

    }
    
    deleteUser = (req,res)=>
    {
        const id = req.params.id;
        model.deleteUser(req,res,id);
    }
    
    updateUser = (req,res)=>
    {
        model.updateUser(req,res);
    }

}

module.exports = UserController;