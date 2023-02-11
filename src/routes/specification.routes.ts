import { Router } from "express";
import { InMemorySpecificationRepository } from "../modules/cars/repositories/in-memory/InMemorySpecificationRepository";
import { CreateSpecificationService } from "../modules/cars/services/CreateSpecificationService";

const specificationsRoutes = Router();
const specificationRepository = new InMemorySpecificationRepository();

specificationsRoutes.get("/", (_req, res) => {
  const result = specificationRepository.list();

  return res.status(200).json(result);
});

specificationsRoutes.post("/", (req, res) => {
  const { name, description } = req.body;

  const service = new CreateSpecificationService(specificationRepository);

  try {
    service.execute({ name, description });
  } catch (error) {
    return res.status(400).json({ error });
  }

  return res.status(201).send();
});

export { specificationsRoutes };
