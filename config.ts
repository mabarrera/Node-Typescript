import { config } from 'dotenv'
config()

export default {
    port: process.env.PORT || '7000',
    dbUser: process.env.DB_USER || '',
    dbPassword: process.env.DB_PASSWORD || '',
    dbDatabase: process.env.DB_DATABASE || '',
    dbServer: process.env.DB_SERVER || '',
    secretKey: process.env.SECRET_KEY || '',
}