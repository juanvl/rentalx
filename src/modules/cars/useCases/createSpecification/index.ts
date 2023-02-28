import { InMemorySpecificationRepository } from "../../repositories/implementations/in-memory/InMemorySpecificationRepository";
import { CreateSpecificationController } from "./CreateSpecificationController";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

const repo = InMemorySpecificationRepository.getInstance();
const useCase = new CreateSpecificationUseCase(repo);
const controller = new CreateSpecificationController(useCase);

export { controller };
