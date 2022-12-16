const { Draft, Admin } = require("../models/index");

module.exports = {
  async getAllDrafts(req, res) {
    try {
      const allDrafts = await Draft.find({});
      res.status(200).json(allDrafts);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    };
  },

  async getDraftById({ params }, res) {
    try {
      const oneDraft = await Draft.findOne({ _id: params.id });
      !oneDraft && res.status(404).json({ message: "No draft found with that id." });
      res.status(200).json(oneDraft);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    };
  },

  async createNewDraft(req, res, next) {
    try {
      const newDraft = await Draft.create(req.body);
      const draftAuthor = await Admin.findOneAndUpdate(
          { _id: req.body.postAuthor },
          { $addToSet: { Draft: newDraft._id } },
          { runValidators: true, new: true }
      );
      // Need to add Auth middleware
      // !postAuthor ? res.status(404).json({ message: 'Post added, but no User found with that ID' }) : res.status(200).json(newPost);
      res.status(200).json(newDraft);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    };
  },

  async updateDraft({ params, body }, res) {
    Draft.findByIdAndUpdate({ _id: params.id }, body, { new: true })
      .then((dbDraftData) => {
        if (!dbDraftData) {
          res.status(404).json({ message: "No draft found with that id." });
          return;
        }
        res.json(dbDraftData);
      })
      .catch((err) => {
        console.log((err) => {
          console.log(err);
          res.sendStatus(404);
        });
      });
  },

  async deleteDraft({ params }, res) {
    Draft.findOneAndDelete({ _id: params.id }, { new: true })
      .then((dbDraftData) => {
        if (!dbDraftData) {
          res.status(404).json({ message: "No draft found with that id." });
          return;
        }
        res.json({ message: "Draft deleted" });
      })
      .catch((err) => {
        console.log(err);
        res.sendStatus(404);
      });
  },
};
