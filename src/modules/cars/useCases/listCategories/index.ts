import { InMemoryCategoriesRepository } from "../../repositories/implementations/in-memory/InMemoryCategoriesRepository";
import { ListCategoriesController } from "./ListCategoriesController";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

const listCategoriesRepo = InMemoryCategoriesRepository.getInstance();
const listCategoriesUseCase = new ListCategoriesUseCase(listCategoriesRepo);

const listCategoriesController = new ListCategoriesController(
  listCategoriesUseCase
);

export { listCategoriesController };
