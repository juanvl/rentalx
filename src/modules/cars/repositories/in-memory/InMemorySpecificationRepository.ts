import { Specification } from "../../model/Specification";
import {
  type ICreateSpecificationDTO,
  type ISpecificationRepository,
} from "../ISpecificationRepository";

class InMemorySpecificationRepository implements ISpecificationRepository {
  #specifications: Specification[];

  constructor() {
    this.#specifications = [];
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
