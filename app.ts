import dotenv from 'dotenv'
import Server from './src/models/server';
//import {  } from "module";
dotenv.config()

const server =  new Server()

server.listen()