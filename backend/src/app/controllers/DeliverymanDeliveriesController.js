import * as Yup from "yup";

import { Op } from "sequelize";

import Order from "../models/Order";
import File from "../models/File";
import Recipient from "../models/Recipient";

class DeliverymanDeliveriesController {
  async index(req, res) {
    const { id } = req.params;
    const { delivered } = req.query;

    const orders = await Order.findAll({
      where: {
        deliveryman_id: id,
        canceled_at: null,
        end_date: delivered === "true" ? { [Op.ne]: null } : null,
      },
      attributes: ["id", "product", "start_date", "end_date", "createdAt"],
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
