import express from "express";
import cors from "cors";
import sequelize from "./database/connection";

const app = express();

import "./models/Category";
import "./models/Inventory";
import "./models/Order";
import "./models/OrderItem";
import "./models/Payment";
import "./models/Product";
import "./models/Relations";
import "./models/User";

import usersRoutes from "./routes/users.routes";

app.use(express.json());
app.use(cors());

app.use("/api", usersRoutes);

const main = async () => {
  await sequelize.authenticate();
  await sequelize.sync({ force: true });

  app.listen(3000, () => {
    console.log("Server running on port :3000");
  });
};

main();
