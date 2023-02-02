import { Router } from "express";
import { CategoriesRepository } from "../repositories/CategoriesRepository";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.get("/", (req, res) => {
  const categories = categoriesRepository.list();

  return res.status(200).json(categories);
});

categoriesRoutes.post("/", (req, res) => {
  const { name, description } = req.body;

  const alreadyExists = categoriesRepository.findByName(name);

  if (!alreadyExists) {
    categoriesRepository.create({ name, description });
    return res.status(201).send();
  }

  return res.status(400).send("Resource already exists");
});

export { categoriesRoutes };
