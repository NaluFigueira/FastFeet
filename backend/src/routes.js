import { Router } from "express";

import multer from "multer";
import multerConfig from "./config/multer";

import UserController from "./app/controllers/UserController";
import SessionController from "./app/controllers/SessionController";
import RecipientController from "./app/controllers/RecipientController";
import FileController from "./app/controllers/FileController";
import DeliverymanController from "./app/controllers/DeliverymanController";
import OrderController from "./app/controllers/OrderController";

import authMiddleware from "./app/middlewares/auth";
import verifyAvatarIdMiddleware from "./app/middlewares/verifyAvatarId";
import verifyDeliverymanIdMiddleware from "./app/middlewares/verifyDeliverymanId";
import verifyRecipientIdMiddleware from "./app/middlewares/verifyRecipientId";
// import verifySignatureIdMiddleware from "./app/middlewares/verifySignatureId";

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
routes.post(
  "/deliveryman",
  verifyAvatarIdMiddleware,
  DeliverymanController.store
);
routes.put(
  "/deliveryman",
  verifyAvatarIdMiddleware,
  DeliverymanController.update
);
routes.delete("/deliveryman/:id", DeliverymanController.delete);

routes.get("/orders", OrderController.index);
routes.get("/orders/:id", OrderController.show);
routes.post(
  "/orders",
  [verifyDeliverymanIdMiddleware, verifyRecipientIdMiddleware],
  OrderController.store
);
routes.put(
  "/orders",
  [verifyDeliverymanIdMiddleware, verifyRecipientIdMiddleware],
  OrderController.update
);
routes.delete("/orders/:id", OrderController.delete);

export default routes;
