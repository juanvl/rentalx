import { type CategoriesRepository } from "../repositories/CategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryService {
  #categoriesRepository: CategoriesRepository;

  constructor(categoriesRepository: CategoriesRepository) {
    this.#categoriesRepository = categoriesRepository;
  }

  execute({ name, description }: IRequest) {
    const alreadyExists = this.#categoriesRepository.findByName(name);

    if (alreadyExists) {
      throw new Error("Category already exists");
    }

    this.#categoriesRepository.create({ name, description });
  }
}

export { CreateCategoryService };
