import { type Specification } from "../model/Specification";

interface ICreateSpecificationDTO {
  name: string;
  description: string;
}

interface ISpecificationRepository {
  create: (data: ICreateSpecificationDTO) => void;
  list: () => Specification[];
  findByName: (name: string) => Specification | undefined;
}

export type { ISpecificationRepository, ICreateSpecificationDTO };
