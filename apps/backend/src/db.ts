
import { DataSource } from "typeorm";



export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 5432,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: false,
    logging: false,
    entities: [__dirname + "/entities/*.{ts,js}"],
    subscribers: [],
    migrations: [],
})

// Initialize the data source e imprimir nombre de entidades
AppDataSource.initialize()

