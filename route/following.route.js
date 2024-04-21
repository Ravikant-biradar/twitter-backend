import express from "express";
import check_authorised from "../config/auth.check.js";
import { following_controllers } from "../controller/following.controller.js";
const following_route = express.Router();

following_route.put("/following/:id", check_authorised, following_controllers);

export default following_route;
