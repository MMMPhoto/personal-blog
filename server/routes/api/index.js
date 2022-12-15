const router = require("express").Router();
const adminRoutes = require("./adminRoutes");
const postRoutes = require("./postRoutes");
const draftRoutes = require("./draftRoutes");

router.use("/admin", adminRoutes);
router.use("/posts", postRoutes);
router.use("/drafts", draftRoutes);

module.exports = router;
