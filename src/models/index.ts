import { Sequelize } from "sequelize";
import User from './user';

const sequelize = new Sequelize({
    dialect: "postgres",
    database: 'postgres',
    username: 'postgres',
    password: 'postgres',
    host: 'localhost',
    port: 5432,
  })

  export default sequelize;