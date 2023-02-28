import { type ISpecificationRepository } from "../../repositories/ISpecificationRepository";

class ListSpecificationsUseCase {
  #repo: ISpecificationRepository;

  constructor(repo: ISpecificationRepository) {
    this.#repo = repo;
  }

  execute() {
    const result = this.#repo.list();
    return result;
  }
}

export { ListSpecificationsUseCase };
