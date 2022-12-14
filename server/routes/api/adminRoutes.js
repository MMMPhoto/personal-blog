const router = require("express").Router();

const {
  getAllAdmins,
  getAdminById,
  createNewAdmin,
  updateAdmin,
  login,
  savePost,
  getCurrentAdmin,
} = require("../../controllers/admin-controller.js");

const { authMiddleware } = require("../../utils/auth.js");

router.route("/")
  .get(getAllAdmins)
  .post(createNewAdmin)
  .put(authMiddleware, savePost);

router.route("/login")
  .post(login);

router.route("/me")
  .get(authMiddleware, getCurrentAdmin);

router.route("/:id")
  .get(getAdminById).put(updateAdmin);

module.exports = router;
