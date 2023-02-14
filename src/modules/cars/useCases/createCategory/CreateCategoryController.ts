import { type Request, type Response } from "express";
import { type CreateCategoryUseCase } from "./CreateCategoryUseCase";

class CreateCategoryController {
  #createUseCase: CreateCategoryUseCase;

  constructor(createUseCase: CreateCategoryUseCase) {
    this.#createUseCase = createUseCase;
  }

  handle(request: Request, response: Response) {
    const { name, description } = request.body;

    try {
      this.#createUseCase.execute({ name, description });
    } catch (error) {
      return response.status(400).json({ error });
    }

    return response.status(201).send();
  }
}

export { CreateCategoryController };
