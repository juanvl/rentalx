import { Category } from "../../model/Category";
import { type ICategoriesRepository } from "../ICategoriesRepository";

interface ICreateCategoryDTO {
  name: string;
  description: string;
}

class InMemoryCategoriesRepository implements ICategoriesRepository {
  #categories: Category[] = [];

  constructor() {
    this.#categories = [];
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