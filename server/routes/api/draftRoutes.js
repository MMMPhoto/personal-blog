const router = require("express").Router();

const {
  getAllDrafts,
  getDraftById,
  createNewDraft,
  updateDraft,
  deleteDraft,
} = require("../../controllers/draft-controller.js");

router.route("/").get(getAllDrafts).post(createNewDraft);

router.route("/:id").get(getDraftById).put(updateDraft).delete(deleteDraft);

module.exports = router;
