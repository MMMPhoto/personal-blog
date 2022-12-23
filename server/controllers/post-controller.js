const { Post, Admin } = require("../models/index");

module.exports = {
  async getAllPosts(req, res) {
    try {
      const allPosts = await Post.find({});
      res.status(200).json(allPosts);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    };
  },

  async getPublicPosts(req, res) {
    try {
      const publicPosts = await Post.find({
        published: true,
        public: true
      });
      res.status(200).json(publicPosts);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    };
  },

  async getPostById({ params }, res) {
    try {
      const onePost = await Post.findOne({ _id: params.id });
      !onePost && res.status(404).json({ message: "No post found with that id." });
      res.status(200).json(onePost);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    };
  },

  async createNewPost(req, res, next) {
    try {
      const newPost = await Post.create(req.body);
      const postAuthor = await Admin.findOneAndUpdate(
          { _id: req.body.postAuthor },
          { $addToSet: { Posts: newPost._id } },
          { runValidators: true, new: true }
      );
      res.status(200).json(newPost);
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
