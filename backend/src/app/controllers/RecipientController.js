import * as Yup from "yup";

import { Op } from "sequelize";

import Recipient from "../models/Recipient";

class RecipientController {
  async index(req, res) {
    const { name, page } = req.query;

    const querySchema = Yup.object().shape({
      name: Yup.string(),
      page: Yup.number(),
    });

    if (!(await querySchema.isValid(req.body))) {
      return res
        .status(400)
        .json({ error: "Recipient name must be a string!" });
    }

    const recipients = await Recipient.findAll({
      where: {
        name: { [Op.iLike]: name ? `${name}%` : `%%` },
      },
      limit: 10,
      offset: ((page || 1) - 1) * 10,
      attributes: [
        "id",
        "name",
        "street",
        "number",
        "additional_address",
        "state",
        "city",
        "zip_code",
      ],
    });

    const numberOfRecipients = await Recipient.count({
      where: {
        name: { [Op.iLike]: name ? `${name}%` : `%%` },
      },
    });
    const maxPage = Math.ceil(numberOfRecipients / 10);

    return res.json({ recipients, maxPage });
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      street: Yup.string().required(),
      number: Yup.string().required(),
      additional_address: Yup.string(),
      state: Yup.string().required(),
      city: Yup.string().required(),
      zip_code: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: "Invalid inserted data!" });
    }

    const recipient = await Recipient.create(req.body);

    return res.json(recipient);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      id: Yup.number().required(),
      name: Yup.string(),
      street: Yup.string(),
      number: Yup.string(),
      additional_address: Yup.string(),
      state: Yup.string(),
      city: Yup.string(),
      zip_code: Yup.string(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: "Invalid inserted data!" });
    }

    const { id } = req.body;

    const recipient = await Recipient.findByPk(id);

    if (!recipient) {
      return res.status(400).json({ error: "Invalid id!" });
    }

    await recipient.update(req.body);

    return res.json(recipient);
  }

  async delete(req, res) {
    const schema = Yup.object().shape({
      id: Yup.number().required(),
    });

    if (!(await schema.isValid(req.params))) {
      return res.status(400).json({ error: "Id is required!" });
    }

    const { id } = req.params;

    const recipient = await Recipient.findByPk(id);

    if (!recipient) {
      return res.status(400).json({ error: "Invalid id!" });
    }

    await recipient.destroy();

    return res.json({ msg: "Recipient deleted!" });
  }
}

export default new RecipientController();
