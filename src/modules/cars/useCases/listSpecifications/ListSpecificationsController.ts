import { type Request, type Response } from "express";
import { type ListSpecificationsUseCase } from "./ListSpecificationsUseCase";

class ListSpecificationsController {
  #useCase: ListSpecificationsUseCase;

  constructor(useCase: ListSpecificationsUseCase) {
    this.#useCase = useCase;
  }

  handle(req: Request, res: Response) {
    const result = this.#useCase.execute();

    return res.status(200).json(result);
  }
}

export { ListSpecificationsController };
