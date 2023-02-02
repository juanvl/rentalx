import { type Request, type Response } from "express";
import CreateCourseService from "./services/CreateCourseService";

export function createCourse(req: Request, res: Response) {
  CreateCourseService.execute({ name: "aaa", educator: "test" });

  return res.send();
}
