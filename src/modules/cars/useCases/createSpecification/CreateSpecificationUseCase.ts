import { type ISpecificationRepository } from "../../repositories/ISpecificationRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateSpecificationUseCase {
  #repo: ISpecificationRepository;

  constructor(repo: ISpecificationRepository) {
    this.#repo = repo;
  }

  execute(data: IRequest) {
    const result = this.#repo.findByName(data.name);

    if (result) {
      throw new Error("A spec with this name already exists");
    }

    this.#repo.create(data);
  }
}

export { CreateSpecificationUseCase };
