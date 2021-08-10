import express, { Application } from 'express'
import cors from "cors";

import config from "../../config";
import userRoutes from '../routes/usuarios.routes'
import db from '../database/connect';

class Server {
    private app: Application
    private port:string
    private base:string = '/api'
    private paths = {
        usuarios:       this.base + '/usuarios'
    }

    constructor(){
        this.app = express()
        this.port = config.port

        //Database
        this.database()
        
        //Definir Middlewares
        this.middlewares()

        //Definir rutas
        this.routes()
    }

    async database(){
        try {
            await db.authenticate()
            console.log('Database connect');
            
        } catch (err) {
            throw new Error( err )
        }
    }

    middlewares(){
        //Cors
        this.app.use(cors())

        //Lectura del body
        this.app.use(express.json())

        //Carpeta publica
        this.app.use(express.static('src/public'))        
    }

    routes(){
        this.app.use(this.paths.usuarios, userRoutes)
    }

    listen(){
        this.app.listen( this.port, () => {
            console.log('Server on port', this.port);
            
        })
    }
}

export default Server