const router = require("express").Router();
const adminRoutes = require("./adminRoutes");
const postRoutes = require("./postRoutes");

router.use("/admin", adminRoutes);
router.use("/post", postRoutes);

module.exports = router;
