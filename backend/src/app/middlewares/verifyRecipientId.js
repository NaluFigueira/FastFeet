import Recipient from "../models/Recipient";

export default async (req, res, next) => {
  const { recipient_id } = req.body;

  if (recipient_id) {
    const recipient = await Recipient.findByPk(recipient_id);

    if (!recipient) {
      return res.status(400).json({ error: "Invalid recipient id!" });
    }
  }

  return next();
};
