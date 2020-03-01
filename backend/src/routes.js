import { Router } from "express";

import multer from "multer";
import multerConfig from "./config/multer";

import UserController from "./app/controllers/UserController";
import SessionController from "./app/controllers/SessionController";
import RecipientController from "./app/controllers/RecipientController";
import FileController from "./app/controllers/FileController";
import DeliverymanController from "./app/controllers/DeliverymanController";
import OrderController from "./app/controllers/OrderController";
import DeliverymanDeliveriresController from "./app/controllers/DeliverymanDeliveriesController";
import DeliveryController from "./app/controllers/DeliveryController";
import DeliveryProblemController from "./app/controllers/DeliveryProblemController";

import authMiddleware from "./app/middlewares/auth";
import verifyAvatarIdMiddleware from "./app/middlewares/verifyAvatarId";
import verifyDeliverymanIdMiddleware from "./app/middlewares/verifyDeliverymanId";
import verifyRecipientIdMiddleware from "./app/middlewares/verifyRecipientId";
import verifySignatureIdMiddleware from "./app/middlewares/verifySignatureId";
import getCurrentDateMiddleware from "./app/middlewares/getCurrentDate";

const routes = new Router();
const upload = multer(multerConfig);

routes.post("/users", UserController.store);
routes.post("/sessions", SessionController.store);

routes.get(
  "/deliveryman/:id/deliveries",
  DeliverymanDeliveriresController.index
);

routes.post(
  "/delivery_start",
  getCurrentDateMiddleware,
  DeliveryController.store
);
routes.put(
  "/delivery_end",
  [verifySignatureIdMiddleware, getCurrentDateMiddleware],
  DeliveryController.update
);

routes.post("/problem", DeliveryProblemController.store);

routes.use(authMiddleware);

routes.get("/recipients", RecipientController.index);
routes.post("/recipients", RecipientController.store);
routes.put("/recipients", RecipientController.update);
routes.delete("/recipients/:id", RecipientController.delete);

routes.post("/files", upload.single("file"), FileController.store);

routes.get("/deliveryman", DeliverymanController.index);
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

routes.get("/problems", DeliveryProblemController.index);
routes.get("/delivery/:id/problems", DeliveryProblemController.show);
routes.put(
  "/problem/:id/cancel-delivery",
  getCurrentDateMiddleware,
  DeliveryProblemController.update
);

export default routes;
