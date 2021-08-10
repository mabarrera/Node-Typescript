import { Sequelize } from "sequelize";
import config from "../../config";



const db =  new Sequelize( config.dbDatabase, config.dbUser, config.dbPassword, {
    host: config.dbServer,
    dialect: 'mariadb',
    logging: false
})

export default db

