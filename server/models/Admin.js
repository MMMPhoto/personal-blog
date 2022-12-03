const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const adminSchema = new Schema(
  {
    adminName: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/],
    },
    password: {
      type: String,
      required: true,
    },
    Posts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Post",
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

adminSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  };
  next();
});

adminSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

adminSchema.virtual("postCount").get(function () {
  return this.Posts.length;
});

const Admin = model("Admin", adminSchema);

module.exports = Admin;
