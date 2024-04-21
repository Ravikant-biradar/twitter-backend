import { tweet } from "../model/tweet.model.js";
import { user } from "../model/user.model.js";
// create tweet
export const creat_tweet_controller = async (req, res) => {
  try {
    const { posttweet, createdby } = req.body;
    const create_tweet = await new tweet({
      posttweet,
      createdby,
    }).save();

    res.status(201).send("tweet created");
  } catch (error) {
    console.log(`error in tweet controller ${error}`);
  }
};

// delete tweet
export const delete_tweet = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    await tweet.findByIdAndDelete({ createdby: id });
    res.status(201).json({ mes: "deleted tweet" });
  } catch (error) {
    console.log(`error while deleting post ${error}`);
  }
};

// like and dislike
export const like_and_dislike = async (req, res) => {
  try {
    const { id } = req.params;
    const { logged_in_user_id } = req.body;
    console.log(`logged_in_user_id${logged_in_user_id}`);
    const tweets_one = await tweet.findById(id);
    console.log(`tweets_one ${tweets_one}`);

    if (tweets_one.like.includes(logged_in_user_id)) {
      await tweet.findByIdAndUpdate(tweets_one, {
        $pull: { like: logged_in_user_id },
      });
      return res.send("u unliked the tweet ");
    } else {
      await tweet.findByIdAndUpdate(tweets_one, {
        $push: { like: logged_in_user_id },
      });
      res.send("Tweet liked");
    }
  } catch (error) {
    console.log(`logged error ${error}`);
  }
};

// bookmarks

export const bookmarks = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(`id${id}`);
    const { createdby } = req.body;
    console.log(`logged_user${createdby}`);
    const loggeduser = await tweet.findOne({ createdby });
    console.log(loggeduser.Bookmark);

    if (loggeduser.Bookmark.includes(id)) {
      return await tweet.findByIdAndUpdate(loggeduser, {
        $pull: { Bookmark: id },
      });
    } else {
      return await tweet.findByIdAndUpdate(loggeduser, {
        $push: { Bookmark: id },
      });
    }
  } catch (error) {
    console.log(`error in bookmarks ${error}`);
  }
};

export const getAllTweetWhomUfollow = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(`id : ${id}`);
    const loggeduser = await user.findById(id);
    const usertweet = await tweet.findOne({ createdby: id });
    console.log(`usertweet : ${usertweet}`);
    const hello = await Promise.all(
      loggeduser.following.map((ids) => tweet.find({ createdby: ids }))
    );
    console.log(`hello : ${loggeduser}`);
    return res.status(201).json({ tweets: hello.concat(usertweet) });
  } catch (error) {
    console.log(`error while  getting All Tweet Whom U follow : ${error}`);
  }
};
