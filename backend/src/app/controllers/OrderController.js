import * as Yup from "yup";

import { Op } from "sequelize";

import Order from "../models/Order";
import File from "../models/File";
import Recipient from "../models/Recipient";
import Deliveryman from "../models/Deliveryman";

class DeliverymanController {
  async index(req, res) {
    const { product } = req.query;

    const querySchema = Yup.object().shape({
      product: Yup.string(),
    });

    if (!(await querySchema.isValid(req.body))) {
      return res.status(400).json({ error: "Product name must be a string!" });
    }

    const orders = await Order.findAll({
      where: {
        product: { [Op.iLike]: product ? `${product}%` : `%%` },
      },
      attributes: ["id", "product", "canceled_at", "start_date", "end_date"],
      include: [
        {
          model: File,
          as: "signature",
          attributes: ["url", "path"],
        },
        {
          model: Deliveryman,
          as: "deliveryman",
          attributes: ["name"],
        },
        {
          model: Recipient,
          as: "recipient",
          attributes: [
            "name",
            "street",
            "number",
            "additional_address",
            "state",
            "city",
            "zip_code",
          ],
        },
      ],
    });

    return res.json(orders);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      recipient_id: Yup.number().required(),
      deliveryman_id: Yup.number().required(),
      product: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: "Invalid inserted data!" });
    }

    const order = await Order.create(req.body);

    return res.json(order);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      id: Yup.number().required(),
      recipient_id: Yup.number(),
      deliveryman_id: Yup.number(),
      product: Yup.string(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: "Invalid inserted data!" });
    }

    const { id } = req.body;

    const order = await Order.findByPk(id);

    if (!order) {
      return res.status(400).json({ error: "Invalid id!" });
    }

    await order.update(req.body);

    return res.json(order);
  }

  async delete(req, res) {
    const schema = Yup.object().shape({
      id: Yup.number().required(),
    });

    if (!(await schema.isValid(req.params))) {
      return res.status(400).json({ error: "Id is required!" });
    }

    const { id } = req.params;

    const order = await Order.findByPk(id);

    if (!order) {
      return res.status(400).json({ error: "Invalid id!" });
    }

    await order.destroy();

    return res.json({ msg: "Order was deleted!" });
  }
}

export default new DeliverymanController();
