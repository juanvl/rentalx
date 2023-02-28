import { type Request, type Response } from "express";
import { type CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

class CreateSpecificationController {
  #useCase: CreateSpecificationUseCase;

  constructor(useCase: CreateSpecificationUseCase) {
    this.#useCase = useCase;
  }

  handle(req: Request, res: Response) {
    const { name, description } = req.body;

    try {
      this.#useCase.execute({ name, description });
      res.status(201).send();
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).json({ error: error.message });
      }
      return res.status(500);
    }
  }
}

export { CreateSpecificationController };
