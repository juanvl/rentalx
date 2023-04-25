import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "docker",
  password: "docker",
  database: "rentalx",
  synchronize: true,
  logging: true,
  entities: [],
  subscribers: [],
  migrations: ["src/database/migrations/*.ts"],
});

// AppDataSource.initialize()
//   .then(async () => {
//     // do anything here like connecting to your express server or adding document to your db
//   })
//   .catch((e) => {
//     console.log(e);
//   });
