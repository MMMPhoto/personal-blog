const router = require("express").Router();

const {
  getAllPosts,
  getPostById,
  createNewPost,
  updatePost,
  deletePost,
} = require("../../controllers/post-controller.js");

router.route("/").post(createNewPost);

router.route("/:published/:public").get(getAllPosts);

router.route("/:id").get(getPostById).put(updatePost).delete(deletePost);

module.exports = router;
