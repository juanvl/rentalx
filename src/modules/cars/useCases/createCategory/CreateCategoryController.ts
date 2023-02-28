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
      return response.status(201).send();
    } catch (error) {
      if (error instanceof Error) {
        return response.status(400).json({ error: error.message });
      }
      return response.status(500);
    }
  }
}

export { CreateCategoryController };
