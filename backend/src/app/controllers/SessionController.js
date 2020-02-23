import jwt from "jsonwebtoken";
import * as Yup from "yup";
import User from "../models/User";
import authConfig from "../../config/auth";

class SessionController {
  async store(req, res) {
    const schema = Yup.object.shape({
      email: Yup.email().isRequired(),
      password: Yup.string()
        .isRequired()
        .min(6),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: "Invalid inserted data!" });
    }

    const { email, password } = req.body;

    const user = await User.findOne({
      where: { email },
    });

    if (!user) {
      return res.status(401).json({ error: "User not found!" });
    }

    if (!user.checkPassword(password)) {
      return res.status(401).json({ error: "Invalid email and password!" });
    }

    const { id, name } = user;

    return res.json({
      user: {
        id,
        name,
        email,
      },
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    });
  }
}

export default new SessionController();
