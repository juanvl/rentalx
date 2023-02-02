import { Router } from "express";
import { Category } from "../model/Category";

const categoriesRoutes = Router();

const categories: Category[] = [];

categoriesRoutes.post("/", (req, res) => {
  const { name, description } = req.body;

  const category = new Category({
    name,
    description,
  });
  categories.push(category);

  console.log(categories);

  return res.status(201).send();
});

export { categoriesRoutes };
