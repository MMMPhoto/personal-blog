const router = require("express").Router();

const {
  getAllPosts,
  getPublicPosts,
  getPostById,
  createNewPost,
  updatePost,
  deletePost,
} = require("../../controllers/post-controller.js");

router.route("/").get(getAllPosts).post(createNewPost);

router.route("/public").get(getPublicPosts);

router.route("/:id").get(getPostById).put(updatePost).delete(deletePost);

module.exports = router;
