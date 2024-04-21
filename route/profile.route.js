import express from "express";
import check_authorised from "../config/auth.check.js";
import { profile_controller } from "../controller/profile.controller.js";
const profile_route = express.Router();

profile_route.get("/profile/:id", check_authorised, profile_controller);

export default profile_route;
