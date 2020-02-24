import File from "../models/File";

export default async (req, res, next) => {
  const { avatar_id } = req.body;

  if (avatar_id) {
    const file = await File.findByPk(avatar_id);

    if (!file) {
      return res.status(400).json({ error: "Invalid file id!" });
    }
  }

  return next();
};
