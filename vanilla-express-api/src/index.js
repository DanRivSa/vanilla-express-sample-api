const express = require('express');
const app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//routes
app.use(require('./routes/index.routes'));


app.set('name','vanilla express api test');
app.set('port',process.env.PORT || 3000);


app.listen(app.get('port'),(req,res)=>{
    console.log('app: ',app.get('name'));
    console.log('port: ',app.get('port')); 
});