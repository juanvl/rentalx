import { type ISpecificationRepository } from "../repositories/ISpecificationRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateSpecificationService {
  #specRepository: ISpecificationRepository;

  constructor(repository: ISpecificationRepository) {
    this.#specRepository = repository;
  }

  execute({ name, description }: IRequest) {
    const alreadyExists = this.#specRepository.findByName(name);

    if (alreadyExists) {
      throw new Error("Specification already exists");
    }

    this.#specRepository.create({ name, description });
  }
}

export { CreateSpecificationService };
