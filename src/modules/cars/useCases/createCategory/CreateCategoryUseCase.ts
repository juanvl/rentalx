import { type ICategoriesRepository } from "../../repositories/ICategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryUseCase {
  #categoriesRepository: ICategoriesRepository;

  constructor(categoriesRepository: ICategoriesRepository) {
    this.#categoriesRepository = categoriesRepository;
  }

  async execute({ name, description }: IRequest) {
    const alreadyExists = await this.#categoriesRepository.findByName(name);

    if (alreadyExists) {
      throw new Error("Category already exists");
    }

    this.#categoriesRepository.create({ name, description });
  }
}

export { CreateCategoryUseCase };
