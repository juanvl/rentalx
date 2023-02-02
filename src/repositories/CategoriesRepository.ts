import { Category } from "../model/Category";

interface ICreateCategoryDTO {
  name: string;
  description: string;
}

class CategoriesRepository {
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

export { CategoriesRepository };
