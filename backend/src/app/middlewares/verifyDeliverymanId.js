import Deliveryman from "../models/Deliveryman";

export default async (req, res, next) => {
  const { deliveryman_id } = req.body;

  if (deliveryman_id) {
    const deliveryman = await Deliveryman.findByPk(deliveryman_id);

    if (!deliveryman) {
      return res.status(400).json({ error: "Invalid delivery-man id!" });
    }
  }

  return next();
};
