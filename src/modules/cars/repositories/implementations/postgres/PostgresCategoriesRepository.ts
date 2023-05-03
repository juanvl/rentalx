import { getRepository, type Repository } from "typeorm";
import { Category } from "../../../entities/Category";
import {
  type ICategoriesRepository,
  type ICreateCategoryDTO,
} from "../../ICategoriesRepository";

class PostgresCategoriesRepository implements ICategoriesRepository {
  #repository: Repository<Category>;
  static #INSTANCE: PostgresCategoriesRepository;

  private constructor() {
    this.#repository = getRepository(Category);
  }

  static getInstance() {
    if (!PostgresCategoriesRepository.#INSTANCE) {
      PostgresCategoriesRepository.#INSTANCE =
        new PostgresCategoriesRepository();
    }

    return PostgresCategoriesRepository.#INSTANCE;
  }

  async list() {
    const categories = await this.#repository.find();
    return categories;
  }

  async create({ name, description }: ICreateCategoryDTO) {
    const category = this.#repository.create({ name, description });

    await this.#repository.save(category);
  }

  async findByName(name: string) {
    const category = await this.#repository.findOneBy({ name });
    return category;
  }
}

export { PostgresCategoriesRepository };
