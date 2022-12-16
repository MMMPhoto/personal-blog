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
      default: Date.now
    },
    public: {
      type: Boolean,
    },
    // True means published post, false means saved as draft
    published: {
      type: Boolean,
    },
    postAuthor: {
      type: Schema.Types.ObjectId,
      ref: "Admin",
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
    timestamps: true,
    
  }
);

const Post = model("Post", postSchema);

module.exports = Post;
