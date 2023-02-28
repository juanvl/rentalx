import { Specification } from "../../../model/Specification";
import {
  type ICreateSpecificationDTO,
  type ISpecificationRepository,
} from "../../ISpecificationRepository";

class InMemorySpecificationRepository implements ISpecificationRepository {
  #specifications: Specification[];

  static #INSTANCE: InMemorySpecificationRepository;

  private constructor() {
    this.#specifications = [];
  }

  static getInstance() {
    if (!InMemorySpecificationRepository.#INSTANCE) {
      InMemorySpecificationRepository.#INSTANCE =
        new InMemorySpecificationRepository();
    }

    return InMemorySpecificationRepository.#INSTANCE;
  }

  create(data: ICreateSpecificationDTO) {
    const spec = new Specification(data);
    this.#specifications.push(spec);
  }

  list() {
    return this.#specifications;
  }

  findByName(name: string) {
    const result = this.#specifications.find((item) => item.name === name);
    return result;
  }
}

export { InMemorySpecificationRepository };
