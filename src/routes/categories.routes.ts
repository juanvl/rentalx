import { Router } from "express";
import { InMemoryCategoriesRepository } from "../modules/cars/repositories/in-memory/InMemoryCategoriesRepository";
import { CreateCategoryService } from "../modules/cars/services/CreateCategoryService";

const categoriesRoutes = Router();
const categoriesRepository = new InMemoryCategoriesRepository();

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
