const { Post } = require("../models/index");

module.exports = {
  async getAllPosts(req, res) {
    Post.find({})
      .select("-__v")
      .then((dbPostData) => res.json(dbPostData))
      .catch((err) => {
        console.error({ message: err });
        return res.status(500).json(err);
      });
  },

  async getPostById({ params }, res) {
    Post.findOne({ _id: params.id })
      .select("-__v")
      .then((dbPostData) => {
        if (!dbPostData) {
          res.status(404).json({ message: "No post found with that id." });
          return;
        }
        res.json(dbPostData);
      })
      .catch((err) => {
        console.log(err);
        res.sendStatus(404);
      });
  },

  async createNewPost(req, res, next) {
    try {
      const newPost = await Post.create(req.body);
      const postAuthor = await Admin.findOneAndUpdate(
          { _id: req.body.admin._id },
          { $addToSet: { thoughts: newThought._id } },
          { runValidators: true, new: true }
      );
      // Need to add Auth middleware
      !postAuthor ? res.status(404).json({ message: 'Thought added, but no User found with that ID' }) : res.status(200).json(newThought);   
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    };
  },

  async updatePost({ params, body }, res) {
    Post.findByIdAndUpdate({ _id: params.id }, body, { new: true })
      .then((dbPostData) => {
        if (!dbPostData) {
          res.status(404).json({ message: "No post found with that id." });
          return;
        }
        res.json(dbPostData);
      })
      .catch((err) => {
        console.log((err) => {
          console.log(err);
          res.sendStatus(404);
        });
      });
  },

  async deletePost({ params }, res) {
    Post.findOneAndDelete({ _id: params.id }, { new: true })
      .then((dbPostData) => {
        if (!dbPostData) {
          res.status(404).json({ message: "No post found with that id." });
          return;
        }
        res.json({ message: "Post deleted" });
      })
      .catch((err) => {
        console.log(err);
        res.sendStatus(404);
      });
  },
};
