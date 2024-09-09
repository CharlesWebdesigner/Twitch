import User from "../../models/User.js";
export const postRegister = async (req, res) => {
  let body = req.body;
  const user = await User.create({
    username: body.username,
    email: body.email,
    password: body.password,
  });
  return res.status(201).send("user added successfully");
};
