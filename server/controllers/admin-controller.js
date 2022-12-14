
const { Admin, Post } = require("../models");
const { signToken } = require("../utils/auth.js");

module.exports = {
  async getAllAdmins(req, res) {
    Admin.find({})
      .select("-__v")
      .then((dbAdminData) => res.json(dbAdminData))
      .catch((err) => {
        console.error({ message: err });
        return res.status(500).json(err);
      });
  },

  async getCurrentAdmin({ admin = null, params }, res) {
    const foundAdmin = await Admin.findOne({ _id: admin ? admin._id : params.id }).populate({
      path: "Posts",
      options: { strictPopulate: false },
    });

    if (!foundAdmin) {
      return res
        .status(400)
        .json({ message: "No Admin with that ID!" });
    };
    res.json(foundAdmin);
  },

  async getAdminById({ params }, res) {
    Admin.findOne({ _id: params.id })
      .select("-__v")
      .then((dbAdminData) => {
        if (!dbAdminData) {
          res.status(404).json({ message: "No Admin with that ID" });
          return;
        }
        res.json(dbAdminData);
      })
      .catch((err) => {
        console.log(err);
        res.sendStatus(404);
      });
  },

	async createNewAdmin(req, res) {
		try {
			const newAdmin = await Admin.create(req.body);
			const token = signToken(newAdmin);
			return res.json({ token, newAdmin });
		} catch (err) {
			console.log(err);
			return res.status(400).json(err);
		};
	},

	async updateAdmin({ params, body }, res) {
		Admin.findByIdAndUpdate({ _id: params.id }, body, { new: true })
		.then((dbAdminData) => {
			if (!dbAdminData) {
			res.status(404).json({ message: "No user found with that ID" });
			return;
			}
			res.json(dbAdminData);
		})
		.catch((err) => {
			console.log(err);
			res.sendStatus(404);
		});
	},

	async login({ body }, res) {
		try {
			const admin = await Admin.findOne({
				$or: [{ email: body.email }, { password: body.password }],
			})
			!admin && res.status(400).json({ message: "No Admin with that email!" });
			const correctPw = await admin.isCorrectPassword(body.password);
			!correctPw && res.status(400).json({ message: "Incorrect Password!" });
			const token = signToken(admin);
			res.json({ token, admin });
		} catch (err) {
			console.log(err);
			return res.status(400).json(err);
		};
	},

  async savePost({ admin, body }, res) {
    try {
      const updatedAdmin = await Admin.findByIdAndUpdate(
        { _id: admin._id },
        { $push: { Posts: body } },
        { new: true, runValidators: true }
      );
      return res.json(updatedAdmin);
    } catch (err) {
      console.log(err);
      return res.status(400).json(err);
    };
  }
};
