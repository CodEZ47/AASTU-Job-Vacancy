import express from 'express'
import prisma from '../lib/prisma'
import { z } from 'zod'
const router = express.Router()
router.get('/', async (req, res) => {
    const users = await prisma.user.findMany();
    res.json(users);
})
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const user = await prisma.user.findUnique({
        where: {
            id: id,
        },
    });
    //TODO: Merge tables of office if the user is an office
    res.json(user);
})
router.post('/', async (req, res) => {
    try {
        const { name, email, password , role} = req.body;
        const FormData = z.object({
            name: z.string(),
            email: z.string(),
            password: z.string(),
            role: z.union([z.literal('ADMIN'), z.literal('APPLICANT'), z.literal('OFFICE'), z.literal('PANELIST'), z.literal('CHAIR')]),
        });
        const data = FormData.parse(req.body);
        const user = await prisma.user.create({
            data: {
                name: name,
                email: email,
                password: password,
                role
            },
        });
        res.json(user);
    } catch (e) {
        console.log(e);
        res.status(400).json(e);
    }
})
router.put('/:id', async (req, res) => {
    try{
        const { id } = req.params;
        const { name, email, password, role } = req.body;
        const FormData = z.object({
            name: z.string(),
            email: z.string(),
            password: z.string(),
        });
        const user = await prisma.user.update({
          where: {
            id: id,
          },
          data: {
            name: name,
            email: email,
            password: password,
            role: z.union([z.literal('ADMIN'), z.literal('APPLICANT'), z.literal('OFFICE'), z.literal('PANELIST'), z.literal('CHAIR')])
          },
        });
        res.json(user);
    } catch (e) {
        console.log(e);
        res.status(400).json(e);
    }
})
router.delete('/:id', async (req, res) => {
    try{
        const { id } = req.params;
        const user = await prisma.user.delete({
          where: {
            id: id,
          },
        });
        res.json(user);
    } catch (e) {
        console.log(e);
        res.status(400).json(e);
    }
}
)
export default router
/**
 * vacant position
 * requirement
 * application
 * academic_rank
 * academic_rank_requirement
 */