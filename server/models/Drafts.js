const { Schema, model } = require("mongoose");

const draftSchema = new Schema(
  {
    title: {
      type: String,
    },
    body: {
      type: String,
    },
    createdAt: {
      type: Date,
      default: Date.now
    },
    updatedAt: {
      type: Date,
      default: Date.now
    },
    public: {
      type: Boolean,
    },
    postAuthor: {
      type: Schema.Types.ObjectId,
      ref: "Admin",
    },
    tags: [
      {
        type: String,
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    timestamps: true,
    
  }
);

const Draft = model("Draft", draftSchema);

module.exports = Draft;
