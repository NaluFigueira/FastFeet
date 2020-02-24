import { Router } from "express";

import multer from "multer";
import multerConfig from "./config/multer";

import UserController from "./app/controllers/UserController";
import SessionController from "./app/controllers/SessionController";
import RecipientController from "./app/controllers/RecipientController";
import FileController from "./app/controllers/FileController";
import DeliverymanController from "./app/controllers/DeliverymanController";

import authMiddleware from "./app/middlewares/auth";

const routes = new Router();
const upload = multer(multerConfig);

routes.post("/users", UserController.store);
routes.post("/sessions", SessionController.store);

routes.use(authMiddleware);

routes.get("/recipients", RecipientController.index);
routes.get("/recipients/:id", RecipientController.show);
routes.post("/recipients", RecipientController.store);
routes.put("/recipients", RecipientController.update);
routes.delete("/recipients/:id", RecipientController.delete);

routes.post("/files", upload.single("file"), FileController.store);

routes.get("/deliveryman", DeliverymanController.index);
routes.get("/deliveryman/:id", DeliverymanController.show);
routes.post("/deliveryman", DeliverymanController.store);
routes.put("/deliveryman", DeliverymanController.update);
routes.delete("/deliveryman/:id", DeliverymanController.delete);

export default routes;
