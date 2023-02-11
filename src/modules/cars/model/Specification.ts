import { randomUUID } from "node:crypto";

class Specification {
  id?: string;
  name: string;
  description: string;
  createdAt?: Date;

  constructor({ name, description }: Specification) {
    if (!this.id) {
      this.id = randomUUID();
    }
    this.name = name;
    this.description = description;
    this.createdAt = new Date();
  }
}

export { Specification };
