import { Router } from "express";
import { controller as createSpecificationController } from "../modules/cars/useCases/createSpecification";
import { controller as listSpecificationsController } from "../modules/cars/useCases/listSpecifications";

const specificationsRoutes = Router();

specificationsRoutes.get("/", (req, res) => {
  return listSpecificationsController.handle(req, res);
});

specificationsRoutes.post("/", (req, res) => {
  return createSpecificationController.handle(req, res);
});

export { specificationsRoutes };
