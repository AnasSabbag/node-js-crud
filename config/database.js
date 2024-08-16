const { Pool } = require('pg');

// const {sequelize}=require('sequleize');



// DB_HOST=localhost;DB_NAME=project-july;DB_PASSWORD=2000;DB_PORT=5432;DB_USER=postgres;SERVER_PORT=8080


console.log("called ");
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'project-july',
    password: '2000',
    port: 5432,
});

pool.connect()
    .then(()=>console.log('Connected to postgres Sql '))
    .catch(err=>console.log('database connection err',err.stack));




module.exports = pool;


