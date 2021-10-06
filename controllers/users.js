const { response } = require('express');
const Pool = require('pg').Pool;

const pool = new Pool({
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    database: process.env.PGDB,
    password: process.env.DBPASSWORD,
    port: process.env.PGPORT
});


const loginUser = (req, res = response) => {

    const { email, password } = req.body;
    var date = new Date();

    if (!email) {
        res.status(401).json({
            msg: "Email vacio"
        })
    } else {
        if (!password) {
            res.status(401).json({
                msg: "Password Vacia"
            })
        } else {
            res.status(200).json({
                msg: "login succesful",
                email,
                password
            })
        }
    }
};



module.exports = {
    loginUser,
};