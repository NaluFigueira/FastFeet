import * as Yup from "yup";

import Queue from "../../lib/Queue";
import OrderCanceledMail from "../jobs/OrderCanceledMail";

import DeliveryProblem from "../models/DeliveryProblem";
import Order from "../models/Order";
import Deliveryman from "../models/Deliveryman";

class DeliveryProblemController {
  async index(req, res) {
    const deliveryProblems = await DeliveryProblem.findAll({
      attributes: ["delivery_id", "description"],
      include: [
        {
          model: Order,
          as: "order",
          attributes: [],
          where: { canceled_at: null },
        },
      ],
    });

    return res.json(deliveryProblems);
  }

  async show(req, res) {
    const schema = Yup.object().shape({
      id: Yup.number().required(),
    });

    if (!(await schema.isValid(req.params))) {
      return res.status(400).json({ error: "Delivery id required!" });
    }

    const deliveryProblems = await DeliveryProblem.findAll({
      where: { delivery_id: req.params.id },
      attributes: ["delivery_id", "description", "created_at"],
    });

    if (!deliveryProblems) {
      return res.status(400).json({ error: "Invalid delivery id!" });
    }

    return res.json(deliveryProblems);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      delivery_id: Yup.number().required(),
      description: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: "Invalid inserted data!" });
    }

    const { delivery_id } = req.body;

    const order = await Order.findByPk(delivery_id);

    if (!order) {
      return res.status(400).json({ error: "Invalid delivery id!" });
    }

    const delivery_problem = await DeliveryProblem.create(req.body);

    return res.json(delivery_problem);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      id: Yup.number().required(),
    });

    if (!(await schema.isValid(req.params))) {
      return res.status(400).json({ error: "Delivery id is required!" });
    }

    const { id } = req.params;

    const delivery_problem = await DeliveryProblem.findOne({
      where: { id },
      include: [
        {
          model: Order,
          as: "order",
          attributes: ["id"],
          include: [
            {
              model: Deliveryman,
              as: "deliveryman",
              attributes: ["name", "email"],
            },
          ],
        },
      ],
    });

    if (!delivery_problem) {
      return res.status(400).json({ error: "Invalid id!" });
    }

    const { order } = delivery_problem;

    await order.update({
      canceled_at: req.currentDate,
    });

    await Queue.add(OrderCanceledMail.key, {
      deliveryman: order.deliveryman,
      id: order.id,
    });

    return res.json(order);
  }
}

export default new DeliveryProblemController();
