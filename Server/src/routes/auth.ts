import { Router } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import prisma  from '../lib/prisma';
import { z } from 'zod';
const authRouter = Router();
authRouter.post('/register', async (req, res) => {
  try {
    const { name, email, password, role, university_id, department } = req.body;
    const FormData = z.object({
        name: z.string(),
        email: z.string(),
        password: z.string(),
        role: z.union([z.literal('ADMIN'), z.literal('APPLICANT'), z.literal('OFFICE'), z.literal('PANELIST'), z.literal('CHAIR')]),
        university_id: z.string().optional(),
        department: z.string().optional(),
    });
    const data = FormData.parse(req.body);
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: 'User with this email already exists' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        role,
        university_id,
        department,
        password: hashedPassword,
      },
    });
    const token = jwt.sign({ userId: newUser.id }, process.env.JWT_SECRET);
    res.json({ token, role: data.role });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Something went wrong' });
  }
});


authRouter.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (!existingUser) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }
    const passwordMatches = await bcrypt.compare(password, existingUser.password);
    if (!passwordMatches) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }
    const token = jwt.sign({ userId: existingUser.id }, process.env.JWT_SECRET);
    res.json({ token, role: existingUser.role });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Something went wrong' });
  }
});
export default authRouter;