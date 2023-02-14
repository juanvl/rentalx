import { type Request, type Response } from "express";
import { type ListCategoriesUseCase } from "./ListCategoriesUseCase";

class ListCategoriesController {
  #useCase: ListCategoriesUseCase;

  constructor(useCase: ListCategoriesUseCase) {
    this.#useCase = useCase;
  }

  handle(req: Request, res: Response) {
    const categories = this.#useCase.execute();

    return res.status(200).json(categories);
  }
}

export { ListCategoriesController };
