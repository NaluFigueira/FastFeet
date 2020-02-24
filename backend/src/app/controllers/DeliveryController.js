import * as Yup from "yup";
import { isAfter, isBefore, isToday } from "date-fns";

import { Op } from "sequelize";

import Order from "../models/Order";

class DeliveryController {
  async store(req, res) {
    /**
     * Validando dados iniciais
     */
    const schema = Yup.object().shape({
      order_id: Yup.number().required(),
      deliveryman_id: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res
        .status(400)
        .json({ error: "Order and deliveryman ids are required!" });
    }

    /**
     * Verificando se a encomenda é uma encomenda válida
     */

    const { order_id, deliveryman_id } = req.body;

    const order = await Order.findOne({
      where: {
        id: order_id,
        deliveryman_id,
        start_date: null,
        end_date: null,
        canceled_at: null,
      },
    });

    if (!order) {
      return res.status(401).json({
        error:
          "The order was not found or it's been canceled, started or ended!",
      });
    }

    /**
     * Verificando se o horário atual é válido para retirada,
     * e se o entregador pode relizar mais uma retirada
     */

    const currentDate = new Date(req.currentDate);

    const minDate = currentDate.setHours(8, 0, 0);
    const maxDate = currentDate.setHours(18, 0, 0);

    if (isBefore(req.currentDate, minDate) || isAfter(req.currentDate, maxDate))
      return res.status(401).json({
        error: "Order withdraw is only allowed between 8am and 8pm!",
      });

    const deliverymanOrders = await Order.findAll({
      where: { deliveryman_id },
    });

    const currentDayOrders = deliverymanOrders.filter(delivery_order =>
      delivery_order.start_date ? isToday(delivery_order.start_date) : false
    );

    if (currentDayOrders.length === 5)
      return res.status(401).json({
        error: "You already have started 5 orders today, try tomorrow!",
      });

    /**
     * Iniciando a entrega da encomenda
     */

    await order.update({ start_date: req.currentDate });

    return res.json({ msg: "Order started!" });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      order_id: Yup.number().required(),
      signature_id: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res
        .status(400)
        .json({ error: "Order id and signature id are required!" });
    }

    const { order_id, signature_id } = req.body;

    const order = await Order.findOne({
      where: {
        id: order_id,
        start_date: { [Op.ne]: null },
        end_date: null,
        canceled_at: null,
      },
    });

    if (!order) {
      return res.status(401).json({
        error:
          "This order is either canceled or ended, haven't started, or does not exist!",
      });
    }

    await order.update({ signature_id, end_date: req.currentDate });

    return res.json({ msg: "Order delivered!" });
  }
}

export default new DeliveryController();
