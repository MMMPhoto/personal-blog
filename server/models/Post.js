const { Schema, model } = require("mongoose");

const postSchema = new Schema(
  {
    title: {
      type: String,
    },
    body: {
      type: String,
    },
    createdAt: {
      type: Date,
      default: Date.now
    },
    updatedAt: {
      type: Date,
    },
    public: {
      type: Boolean,
    },
    url: {
      type: String,
      required: true,
    },
    tags: [
      {
        type: String,
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
  }
);

const Post = model("Post", postSchema);

module.exports = Post;
