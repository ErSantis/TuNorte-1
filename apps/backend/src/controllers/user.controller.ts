
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { AppDataSource } from '../db'; // Import the data source

import { User } from '../entities/user'; // Import the User entity

const JWT_SECRET = process.env.JWT_SECRET; // Cargar la variable de entorno JWT_SECRET

const userRepository = AppDataSource.getRepository(User);

export const LoginUser = async (req : Request , res : Response) => {
  
    const { user, password }: { user: string; password: string } = req.body; // Ensure proper typing
    
    console.log('Login attempt:', { user, password });
  
  
    if (!user || !password) {
      return res.status(400).json({ error: 'Username and password are required' });
    }
  
    try {
      
      const foundUser = await userRepository.findOne({
        where: { user: user } // Busca por el campo 'usezr'
      });
  
      if (!foundUser) {
        return res.status(401).json({ error: 'User not found' });
      }
  
  
      const isPasswordValid = await bcrypt.compare(password, foundUser.password);
  
      if (!isPasswordValid) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }
  
      if (!JWT_SECRET) {
        return res.status(500).json({ error: 'JWT secret is not configured' });
      }
  
      const token = jwt.sign({ id: foundUser.user_id }, JWT_SECRET, {
        expiresIn: '1h',
      });
  
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password: _, ...userWithoutPassword } = foundUser;
  
      return res.json({ user: userWithoutPassword, token });
    } catch (error) {
      console.error('Error during login:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  }