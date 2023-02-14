import { type ICategoriesRepository } from "../../repositories/ICategoriesRepository";

class ListCategoriesUseCase {
  #repo: ICategoriesRepository;

  constructor(repo: ICategoriesRepository) {
    this.#repo = repo;
  }

  execute() {
    const result = this.#repo.list();
    return result;
  }
}

export { ListCategoriesUseCase };
