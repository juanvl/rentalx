import { randomUUID } from "node:crypto";
import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";

@Entity("categories")
class Category {
  @PrimaryColumn()
  id?: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @CreateDateColumn()
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
