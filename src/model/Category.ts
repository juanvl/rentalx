import { randomUUID } from "node:crypto";

class Category {
  id?: string;
  name: string;
  description: string;
  createdAt?: Date;

  constructor({ name, description }: Category) {
    if (!this.id) {
      this.id = randomUUID();
    }
    this.name = name;
    this.description = description;
    this.createdAt = new Date();
  }
}

export { Category };
