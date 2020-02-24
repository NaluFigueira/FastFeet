import * as Yup from "yup";

import { Op } from "sequelize";

import Order from "../models/Order";
import File from "../models/File";
import Recipient from "../models/Recipient";

class DeliverymanDeliveriesController {
  async index(req, res) {
    const paramsSchema = Yup.object().shape({
      id: Yup.number().required(),
    });

    const querySchema = Yup.object().shape({
      delivered: Yup.boolean(),
    });

    if (!(await paramsSchema.isValid(req.body))) {
      return res.status(400).json({ error: "Deliveryman id is required!" });
    }

    if (!(await querySchema.isValid(req.body))) {
      return res.status(400).json({ error: "Delivered must be a boolean!" });
    }

    const { id } = req.params;
    const { delivered } = req.query;

    const orders = await Order.findAll({
      where: {
        deliveryman_id: id,
        canceled_at: null,
        end_date: delivered ? { [Op.ne]: null } : null,
      },
      attributes: ["id", "product", "start_date", "end_date"],
      include: [
        {
          model: File,
          as: "signature",
          attributes: ["url", "path"],
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
}

export default new DeliverymanDeliveriesController();
