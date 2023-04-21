import { Request, Response } from "express"
import { ImportCategoryUseCase } from "./ImportCategoryUseCase"

class ImportCategoryController {
  #useCase: ImportCategoryUseCase

  constructor(useCase: ImportCategoryUseCase) {
    this.#useCase = useCase
  }

  handle(req: Request, res: Response) {
    const {file} = req

    if (!file) {
      return res.status(400).send()
    }

    this.#useCase.execute(file)

    return res.send()
  }
}

export { ImportCategoryController }
