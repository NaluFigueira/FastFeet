import { Router } from "express";

import UserController from "./app/controllers/UserController";
import SessionController from "./app/controllers/SessionController";
import RecipientController from "./app/controllers/RecipientController";

import authMiddleware from "./app/middlewares/auth";

const routes = new Router();

routes.post("/users", UserController.store);
routes.post("/sessions", SessionController.store);

routes.get("/recipients/:id", RecipientController.show);
routes.put("/recipients/:id", RecipientController.update);

routes.use(authMiddleware);

routes.get("/recipients", RecipientController.index);
routes.post("/recipients", RecipientController.store);
routes.delete("/recipients/:id", RecipientController.delete);

export default routes;
