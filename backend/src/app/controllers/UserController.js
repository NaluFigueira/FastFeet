import User from "../models/User";

class UserController {
  async store(req, res) {
    const { email } = req.body;

    const userExists = await User.findOne({
      where: { email },
    });

    if (userExists) {
      return res
        .status(400)
        .json({ error: "This e-mail is already registred!" });
    }

    const { id, name } = await User.create(req.body);

    return res.json({ id, name, email });
  }
}

export default new UserController();
