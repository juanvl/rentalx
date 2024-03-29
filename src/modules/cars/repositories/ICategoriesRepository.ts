import { type Category } from "../entities/Category";

interface ICreateCategoryDTO {
  name: string;
  description: string;
}

interface ICategoriesRepository {
  findByName: (name: string) => Promise<Category | null | undefined>;
  list: () => Promise<Category[]>;
  create: (data: ICreateCategoryDTO) => void;
}

export type { ICategoriesRepository, ICreateCategoryDTO };
