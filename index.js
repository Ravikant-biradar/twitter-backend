import express from "express";
const app = express();

import dotenv from "dotenv";
dotenv.config();
const port = process.env.PORT;

import cookieParser from "cookie-parser";

// routes paths
import database_connection from "./database.js";
import auth_Router from "./route/auth.route.js";
import tweet_Route from "./route/tweet.route.js";
import following_route from "./route/following.route.js";
import profile_route from "./route/profile.route.js";
// import check_authorised from "./config/auth.check.js";

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// api or routes or paths
app.use("/api/auth", auth_Router);
app.use("/api/auth", auth_Router);
app.use("/api/auth", auth_Router);
app.use("/api/posttweet", tweet_Route);
app.use("/api/deletetweet", tweet_Route);
app.use("/api/tweet-likes", tweet_Route);
app.use("/api/tweet-bookmarks", tweet_Route);
app.use("/api/follow-api", following_route);
app.use("/api/all", tweet_Route);
app.use("/api/get-profile", profile_route);

app.listen(port, () => {
  database_connection();
  console.log("server listening on port" + port);
});
