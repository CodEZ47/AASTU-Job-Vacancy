import { Request, Response, Router } from "express";
import prisma from "../lib/prisma";
import { z } from "zod";
import authenticate from "../middlewares/authenticate";
import { Application } from "@prisma/client";
const router = Router();
router.get("/", authenticate, async (req: Request, res:Response) => {
  // filter vacancy not older than 15 days if the vacancy is extended if the vacancy is not extended filter vacancy not older than 10 days
  try {
    const vacancies = await prisma.vacancy.findMany({
      where: {
        OR: [
          {
            AND: [
              {
                extended: {
                  equals: true,
                },
              },
              {
                createdAt: {
                  gte: new Date(
                    new Date().getTime() - 15 * 24 * 60 * 60 * 1000
                  ),
                },
              },
            ],
          },
          {
            AND: [
              {
                extended: {
                  equals: false,
                },
              },
              {
                createdAt: {
                  gte: new Date(
                    new Date().getTime() - 10 * 24 * 60 * 60 * 1000
                  ),
                },
              },
            ],
          },
        ],
      },
      include: {
        position: true,
      },
    });
    const user = await prisma.user.findUnique({
      where: {
        id: req.userId,
      },
    });
    if (user?.role === "APPLICANT") {
      const applications = await prisma.application.findMany({
        where: {
          userId: req.userId,
        },
      });
      // map applied false or true
      const filteredVacancies = vacancies.map((vacancy) => {
        const application = applications.find(
          (application) => application.vacancyId === vacancy.id
        );
        if (application) {
          return {
            ...vacancy,
            applied: true,
          };
        }
        return {
          ...vacancy,
          applied: false,
        };
      });
      res.json(filteredVacancies);
      return;
    }
    res.status(200).json(vacancies);
  } catch (e) {
    console.log(e);
    res.status(400).json({
      message: "Something went wrong",
    });
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
router.post("/",authenticate, async (req, res) => {
  try {
    // get user from db
    const user = await prisma.user.findUnique({
      where: {
        id: req.userId,
      },
    });
    // check if user is an office
    if (user?.role !== "OFFICE" && user?.role !== "ADMIN") {
      res.status(401).json({
        message: "You are not authorized to create a vacancy",
      });
      return;
    }
    const { name, description, positionId } = req.body;
    const FormData = z.object({
      name: z.string(),
      description: z.string(),
      positionId: z.string(),
    });
    const data = FormData.parse(req.body);
    const vacancy = await prisma.vacancy.create({
      data: {
        name: name,
        description: description,
        positionId: positionId,
        extended: false,
      },
    });
    res.json(vacancy);
  } catch (e) {
    console.log(e);
    res.status(400).json(e);
  }
});
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, extended } = req.body;
    const FormData = z.object({
      name: z.string(),
      description: z.string(),
      extended: z.boolean(),
    });
    const position = await prisma.vacancy.update({
      where: {
        id: id,
      },
      data: {
        name: name,
        description: description,
        extended,
      },
    });
    res.json(position);
  } catch (e) {
    console.log(e);
    res.status(400).json(e);
  }
});
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const position = await prisma.position.delete({
    where: {
      id: id,
    },
  });
  res.json(position);
});
router.post("/extend/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const position = await prisma.vacancy.update({
      where: {
        id: id,
      },
      data: {
        extended: true,
      },
    });
    res.json(position);
  } catch (e) {
    console.log(e);
    res.status(400).json(e);
  }
});
router.post("/:id/applications", authenticate, async (req, res) => {
  console.log(req.body, "req body");
  try {
    const zodScheme = z.object({
      academicRank: z.string(),
      workExperience: z.number(),
      teachingExperience: z.number(),
      researchExperience: z.string(),
      KPI: z.number().min(0).max(100),
      vacancyId: z.string(),
      no_projects: z.number().optional(),
      no_publications: z.number().optional(),
    });
    const docShema = z.object({
      workExperienceDocument: z.string(),
      teachingExperienceDocument: z.string(),
      researchExperienceDocument: z.string(),
      kpiDocument: z.string(),
      academicRankDocument: z.string(),
      strategicPlanDocument: z.string(),
    });
    const data = zodScheme.parse(req.body.data);
    const docData = docShema.parse(req.body.documents);

    const { id } = req.params;
    const application: Application = await prisma.application.create({
      data: {
        academicRank: data.academicRank.toUpperCase(),
        workExperience: data.workExperience,
        teachingExperience: data.teachingExperience,
        researchExperience:
          data.researchExperience === "1" ? "PROJECT" : "PUBLICATION",
        KPI: data.KPI,
        vacancyId: id,
        userId: req.userId,
        no_project: data.no_projects,
        no_publication: data.no_publications,
        workExperienceDocument: docData.workExperienceDocument,
        teachingExperienceDocument: docData.teachingExperienceDocument,
        researchExperienceDocument: docData.researchExperienceDocument,
        KPIDocument: docData.kpiDocument,
        academicRankDocument: docData.academicRankDocument,
        strategicPlanDocument: docData.strategicPlanDocument,
      },
    });
    res.json(application);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});
router.get("/:id/applications", authenticate, async (req, res) => {
  const { id } = req.params;
  const applications = await prisma.application.findMany({
    where: {
      vacancyId: id,
    },
    include: {
      user: true,
    },
  });
  res.json(applications);
});
router.get("/:id/applications/:appId", authenticate, async (req, res) => {
  const { id, appId } = req.params;
  const application = await prisma.application.findUnique({
    where: {
      id: appId,
    },
    include: {
      user: true,
    },
  });
  res.json(application);
});
export default router;
