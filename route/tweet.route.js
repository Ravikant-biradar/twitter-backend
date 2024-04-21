import express from "express";
import {
  bookmarks,
  creat_tweet_controller,
  delete_tweet,
  getAllTweetWhomUfollow,
  like_and_dislike,
} from "../controller/tweet.controller.js";
import check_authorised from "../config/auth.check.js";
const tweet_Route = express.Router();

tweet_Route.post("/createtweet", check_authorised, creat_tweet_controller);
tweet_Route.delete("/deletetweet/:id", check_authorised, delete_tweet);
tweet_Route.put("/like-&-dislike/:id", check_authorised ,  like_and_dislike);
tweet_Route.put("/bookmarks/:id" , check_authorised , bookmarks)
tweet_Route.get("/tweets/:id" , check_authorised , getAllTweetWhomUfollow )
export default tweet_Route;
