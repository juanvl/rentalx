import { Category } from "../../../model/Category";
import { type ICategoriesRepository } from "../../ICategoriesRepository";

interface ICreateCategoryDTO {
  name: string;
  description: string;
}

class InMemoryCategoriesRepository implements ICategoriesRepository {
  #categories: Category[];

  static #INSTANCE: InMemoryCategoriesRepository;

  private constructor() {
    this.#categories = [];
  }

  static getInstance() {
    if (!InMemoryCategoriesRepository.#INSTANCE) {
      InMemoryCategoriesRepository.#INSTANCE =
        new InMemoryCategoriesRepository();
    }

    return InMemoryCategoriesRepository.#INSTANCE;
  }

  list() {
    return this.#categories;
  }

  create({ name, description }: ICreateCategoryDTO) {
    const category = new Category({
      name,
      description,
    });
    this.#categories.push(category);
    console.log(this.#categories);
  }

  findByName(name: string) {
    const result = this.#categories.find((item) => item.name === name);
    return result;
  }
}

export { InMemoryCategoriesRepository };
