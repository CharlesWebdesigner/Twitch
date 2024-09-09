import User from "../../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
export const postRegister = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const userExists = await User.exists({ email });
    if (userExists) {
      return res.status(400).json({ message: "Email already in use" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      username: username,
      email: email.toLowerCase(),
      password: hashedPassword,
    });
    const token = jwt.sign(
      {
        userId: user._id,
        email,
      },
      process.env.Token_key,
      { expiresIn: "5d" }
    );
    return res.status(201).json({
      userDetails: {
        email,
        username,
        token,
      },
    });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
