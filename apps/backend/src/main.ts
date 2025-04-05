import "reflect-metadata"

import express from 'express';
import jwt from 'jsonwebtoken';
const cors = require("cors");
import dotenv from 'dotenv';
import { AppDataSource } from './db'; // Import the data source
import { User } from './user'; // Import the User entity
import bcrypt from 'bcrypt';

dotenv.config();
// Cargar variables de entorno desde el archivo .env

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const app = express();

app.use(express.json());

app.use(cors());

const JWT_SECRET = process.env.JWT_SECRET;
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

app.post('/auth/login', async (req, res) => {
  const { user, password } = req.body; // Cambia name por user
  console.log('Login attempt:', { user, password });

  const depassword = password.toString().trim();

  if (!user || !password) {
    return res.status(400).json({ error: 'Username and password are required' });
  }

  try {
    const userRepository = AppDataSource.getRepository(User);
    const foundUser = await userRepository.findOne({
      where: { user: user } // Busca por el campo 'user'
    });

    if (!foundUser) {
      return res.status(401).json({ error: 'User not found' });
    }


    const isPasswordValid = await bcrypt.compare(depassword, foundUser.password);

    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    if (!JWT_SECRET) {
      return res.status(500).json({ error: 'JWT secret is not configured' });
    }

    const token = jwt.sign({ id: foundUser.user_id }, JWT_SECRET, {
      expiresIn: '1h',
    });

    const { password, ...userWithoutPassword } = foundUser;

    return res.json({ user: userWithoutPassword, token });
  } catch (error) {
    console.error('Error during login:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});
