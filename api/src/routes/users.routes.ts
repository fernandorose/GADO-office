import express from "express";
import * as usersControllers from "../controllers/users.controllers";

const router = express.Router();

router
  .get("/users/get", usersControllers.getAllUsers)
  .get("/users/get/:id", usersControllers.getUserById)
  .post("/users/create", usersControllers.createUser);

export default router;
