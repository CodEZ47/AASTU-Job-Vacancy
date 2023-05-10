import prisma from "../lib/prisma";
import express from "express";
import authenticate from "../middlewares/authenticate";
import { z } from "zod";
const router = express.Router();

router.get("/", async (req, res) => {
  try{
    const positions = await prisma.position.findMany();
    res.status(200).json(positions);
  } catch(e) {
    res.status(400).json(e);
  }
});
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const position = await prisma.position.findUnique({
    where: {
      id: id,
    },
  });
  res.json(position);
});
router.post("/", authenticate, async (req, res) => {
  try {
    const { name, description, level } = req.body;
    const FormData = z.object({
      name: z.string(),
      description: z.string(),
      level: z.string(),
    });
    const data = FormData.parse(req.body);
    const position = await prisma.position.create({
      data: {
        name: name,
        description: description,
        level,
      },
    });
    res.json(position);
  } catch (e) {
    console.log(e);
    res.status(400).json(e);
  }
});
router.put("/:id", async (req, res) => {
    try{
        const { id } = req.params;
        const { name, description, level } = req.body;
        const FormData = z.object({
            name: z.string(),
            description: z.string(),
            level: z.string(),
        });
        const position = await prisma.position.update({
          where: {
            id: id,
          },
          data: {
            name: name,
            description: description,
            level,
          },
        });
        res.json(position);
    } catch (e) {
        console.log(e);
        res.status(400).json(e);
    }
 
});
export default router;
