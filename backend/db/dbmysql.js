const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit: 10,
    password: "password",
    user: "root",
    database: "projectprogram",
    host: 'localhost',
    port: '3306'
});


let stocksdb = {};

stocksdb.all = () =>{

    return new Promise((resolve, reject) =>{
        pool.query('SELECT * FROM stocks', (err, results) =>{
            if (err) { 
                return reject(err)
            };

            return resolve(results);
        })
    })
}


stocksdb.one = (id)=>{
    return new Promise((resolve, reject)=>{
        pool.query('SELECT * FROM stocks WHERE ticker = ?', [id], (err, results) =>{
            if (err) { 
                return reject(err)
            };

            return resolve(results[0]);//sql thing returns a list of one thing

        })
    })
}

module.exports = stocksdb;