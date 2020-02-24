import File from "../models/File";

export default async (req, res, next) => {
  const { signature_id } = req.body;

  if (signature_id) {
    const file = await File.findByPk(signature_id);

    if (!file) {
      return res.status(400).json({ error: "Invalid file id!" });
    }
  }

  return next();
};
