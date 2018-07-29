
const mysql = require("mysql");
const knex = require("knex")({
    client: 'mysql',
    connection: {
      host : 'localhost',
      port: 3406,
      user : 'root',
      password : 'password',
      database : 'final_project',
      ssl: false,
    }
});










// const express = require("express");
// const cors = require("cors");
// const mysql = require("mysql");

// const app = express();

// const SELECT_ALL_PRODUCTS_QUERY = 'SELECT * FROM products'

// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'test',
//     password: 'password',
//     database: 'final_project',

// })
// connection.connect(err => {
//     if(err) {
//         return err;
//     }
// });

// app.use(cors());

// app.get('/', (req, res) => {
//    res.send('go to /products to see all products')

// });

// console.log(connection);

// app.get('/products/add', (req, res) => {
//     const {title, description} = req.query;
//     const INSERT_PRODUCTS_QUERY = `INSERT INTO products (titles, description) VALUE('${title}', '${description}')`;
//     connection.query(INSERT_PRODUCTS_QUERY, (err, results) => {
//         if(err) {
//             res.send(err)
//         }
//         else {
//             return res.send("successfully added")
//         }
//     })
 
//  });
 

// app.get('/products', (req, res) => {
//     connection.query(SELECT_ALL_PRODUCTS_QUERY, (err, results) => {
//         if(err) {
//             return res.send(err);
//         }else{
//             return res.json({
//                 data: results
//             })
//         }
//     })

// });


// app.listen(8000, () => {
//     console.log(`Production server listening on port 8000`);
// });