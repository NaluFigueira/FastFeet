import * as Yup from "yup";

import { Op } from "sequelize";

import Deliveryman from "../models/Deliveryman";
import File from "../models/File";

class DeliverymanController {
  async index(req, res) {
    const { name } = req.query;

    const querySchema = Yup.object().shape({
      name: Yup.string(),
    });

    if (!(await querySchema.isValid(req.body))) {
      return res
        .status(400)
        .json({ error: "Deliveryman name must be a string!" });
    }

    const deliverymen = await Deliveryman.findAll({
      where: {
        name: { [Op.iLike]: name ? `${name}%` : `%%` },
      },
      attributes: ["id", "name", "email"],
      include: [
        {
          model: File,
          as: "avatar",
          attributes: ["path", "url"],
        },
      ],
    });

    return res.json(deliverymen);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().required(),
      avatar_id: Yup.number(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: "Invalid inserted data!" });
    }

    const deliveryman = await Deliveryman.create(req.body);

    return res.json(deliveryman);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      id: Yup.number().required(),
      name: Yup.string(),
      email: Yup.string(),
      avatar_id: Yup.number(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: "Invalid inserted data!" });
    }

    const { id } = req.body;

    const deliveryman = await Deliveryman.findByPk(id);

    if (!deliveryman) {
      return res.status(400).json({ error: "Invalid id!" });
    }

    await deliveryman.update(req.body);

    return res.json(deliveryman);
  }

  async delete(req, res) {
    const schema = Yup.object().shape({
      id: Yup.number().required(),
    });

    if (!(await schema.isValid(req.params))) {
      return res.status(400).json({ error: "Id is required!" });
    }

    const { id } = req.params;

    const deliveryman = await Deliveryman.findByPk(id);

    if (!deliveryman) {
      return res.status(400).json({ error: "Invalid id!" });
    }

    await deliveryman.destroy();

    return res.json({ msg: "Delivery man was deleted!" });
  }
}

export default new DeliverymanController();
