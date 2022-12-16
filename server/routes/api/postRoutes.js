const router = require("express").Router();

const {
  getAllPosts,
  getPostById,
  createNewPost,
  updatePost,
  deletePost,
} = require("../../controllers/post-controller.js");

router.route("/").get(getAllPosts).post(createNewPost);

router.route("/:id").get(getPostById).put(updatePost).delete(deletePost);

module.exports = router;
