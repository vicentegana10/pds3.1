const express = require('express');
const cors = require('cors');


class Server {

    constructor() {
        this.app = express();
        this.port = process.env.API_PORT;
        this.usersPath = '/api/users';

        //Middlewares
        this.middlewares();

        //Aplication routes
        this.routes();

    }


    middlewares() {
        //Cors
        this.app.use(cors());

        //Json parse body
        this.app.use(express.json());


        //Public directoru
        this.app.use(express.static('public'));
    }

    routes() {
        this.app.use(this.usersPath, require('../routes/users'));
    }

    listen() {
        this.app.listen(process.env.API_PORT, () => {
            console.log('Running server on port', this.port);
        });
    }

}


module.exports = Server;