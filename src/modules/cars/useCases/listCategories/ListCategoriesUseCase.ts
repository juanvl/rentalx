import { type ICategoriesRepository } from "../../repositories/ICategoriesRepository";

class ListCategoriesUseCase {
  #repo: ICategoriesRepository;

  constructor(repo: ICategoriesRepository) {
    this.#repo = repo;
  }

  async execute() {
    const result = await this.#repo.list();
    return result;
  }
}

export { ListCategoriesUseCase };
