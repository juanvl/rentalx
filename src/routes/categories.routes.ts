import { Router } from "express";
import { PostgresCategoriesRepository } from "../repositories/postgres/PostgresCategoriesRepository";
import { CreateCategoryService } from "../services/CreateCategoryService";

const categoriesRoutes = Router();
const categoriesRepository = new PostgresCategoriesRepository();

categoriesRoutes.get("/", (req, res) => {
  const categories = categoriesRepository.list();

  return res.status(200).json(categories);
});

categoriesRoutes.post("/", (req, res) => {
  const { name, description } = req.body;

  const categoryService = new CreateCategoryService(categoriesRepository);

  try {
    categoryService.execute({ name, description });
  } catch (error) {
    return res.status(400).json({ error });
  }

  return res.status(201).send();
});

export { categoriesRoutes };
