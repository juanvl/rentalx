import { parse } from 'csv-parse';
import fs from 'node:fs';
import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';
import { CreateCategoryUseCase } from '../createCategory/CreateCategoryUseCase';

interface IImportCategory {
  name: string;
  description: string;
}
class ImportCategoryUseCase {
  #repository: ICategoriesRepository

  constructor(repository: ICategoriesRepository) {
    this.#repository = repository
  }

  loadCategories(file: Express.Multer.File) {
    return new Promise<IImportCategory[]>((resolve, reject) => {
      const stream = fs.createReadStream(file.path)
      const parseFile = parse()

      stream.pipe(parseFile)

      const categories: IImportCategory[] = []

      parseFile.on('data', async (line) => {
        const [name, description] = line

        categories.push({
          name,
          description,
        })
      }).on('end', () => {
        resolve(categories)
      }).on('error', (err) => {
        reject(err)
      })
    })
  }

  async execute(file: Express.Multer.File) {
    const loadedCategories = await this.loadCategories(file)
    const createCategoryUseCase = new CreateCategoryUseCase(this.#repository)

    for (const category of loadedCategories) {
      try {
        const { name, description } = category
        createCategoryUseCase.execute({ name, description })
      } catch (error) {
        continue
      }
    }
  }
}

export { ImportCategoryUseCase };

