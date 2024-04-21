import express from "express";
import {
  log_out,
  login_controller,
  register_Controller,
} from "../controller/auth.controller.js";
const auth_Router = express.Router();

auth_Router.post("/register", register_Controller);
auth_Router.post("/login", login_controller);
auth_Router.get("/logout", log_out);

export default auth_Router;
