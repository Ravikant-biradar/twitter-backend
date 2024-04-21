import mongoose from "mongoose";

const tweetSchema = new mongoose.Schema(
  {
    posttweet: {
      type: String,
      required: true,
    },
    like: {
      type: Array,
      default: [],
    },

    Bookmark: {
      type: Array,
      default: [],
    },

    createdby: {
      type: String,
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
  },
  { timestamps: true }
);

export const tweet = mongoose.model("tweet", tweetSchema);
