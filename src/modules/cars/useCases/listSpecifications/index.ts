import { InMemorySpecificationRepository } from "../../repositories/implementations/in-memory/InMemorySpecificationRepository";
import { ListSpecificationsController } from "./ListSpecificationsController";
import { ListSpecificationsUseCase } from "./ListSpecificationsUseCase";

const repo = InMemorySpecificationRepository.getInstance();
const useCase = new ListSpecificationsUseCase(repo);

const controller = new ListSpecificationsController(useCase);

export { controller };
