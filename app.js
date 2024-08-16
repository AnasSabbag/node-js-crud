const express = require('express');
// const bodyParser = require('body-parser');
const pool = require('./config/database');
// const itemRoute = require('./routes/items');


const app = express();
// const port = process.env.PORT || 8080;
const port = 8080;


app.use(express.json());


// app.use('/items',itemRoute);


app.get('/item-json',async(req,res)=>{
    try{
        const result = await pool.query('select name from users;');
        res.json(result.rows);
    }catch(err){
        console.log("e rror Is : ",err);
        res.status(500).send('Server Error');
    }
});


app.listen(port,()=>{
    console.log(`Server running on  http://localhost:${port}`);
});
