import "reflect-metadata"

import express from 'express';
const cors = require("cors");
import dotenv from 'dotenv';

import { LoginUser } from "./controllers/user.controller";

dotenv.config();
// Cargar variables de entorno desde el archivo .env

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const app = express();

app.use(express.json());

app.use(cors());


// También puedes configurarlo de forma específica:
app.use(
  cors({
    origin: "http://localhost:4200", // Permite solicitudes desde el frontend
    methods: "GET,POST,PUT,DELETE",
    allowedHeaders: "Content-Type,Authorization",
  })
);

app.get('/', (req, res) => {
  res.send({ message: 'Hello API' });
});

app.post('/auth/login', LoginUser);

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});
