import express from "express";
import Joi from "joi";
import ExpressValidation from "express-joi-validation";
import { postLogin, postRegister } from "../controller/controller.js";
const router = express();

const validator = ExpressValidation.createValidator({});
const registerSchema = Joi.object({
  username: Joi.string().min(3).max(12).required(),
  password: Joi.string().min(6).max(12).required(),
  email: Joi.string().email().required(),
});
const postLoginSchema = Joi.object({
  password: Joi.string().min(6).max(12).required(),
  email: Joi.string().email().required(),
});
router.post("/register", validator.body(registerSchema), postRegister);
router.post("/login", validator.body(postLoginSchema), postLogin);

export default router;
