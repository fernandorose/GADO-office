import { Sequelize } from "sequelize";

const sequelize = new Sequelize("postgres://admin:gado123@localhost:5432/gado");

export default sequelize;
