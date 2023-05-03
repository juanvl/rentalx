import { PostgresCategoriesRepository } from "../../repositories/implementations/postgres/PostgresCategoriesRepository";
import { ListCategoriesController } from "./ListCategoriesController";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

const listCategoriesRepo = PostgresCategoriesRepository.getInstance();
const listCategoriesUseCase = new ListCategoriesUseCase(listCategoriesRepo);

const listCategoriesController = new ListCategoriesController(
  listCategoriesUseCase
);

export { listCategoriesController };
