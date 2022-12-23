const router = require("express").Router();

const {
  getAllPosts,
  getPublicPosts,
  getPostById,
  createNewPost,
  updatePost,
  deletePost,
} = require("../../controllers/post-controller.js");

const { authMiddleware } = require("../../utils/auth.js");

router.route("/")
  .get(authMiddleware, getAllPosts)
  .post(authMiddleware, createNewPost);

router.route("/public")
  .get(getPublicPosts);

router.route("/:id")
  .get(getPostById)
  .put(authMiddleware, updatePost)
  .delete(authMiddleware, deletePost);

module.exports = router;
