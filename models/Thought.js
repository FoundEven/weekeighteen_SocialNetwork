const { Schema, Types } = require("mongoose");
const Reaction = require("./Reaction");

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      maxlength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    reaction: [Reaction],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);
thoughtSchema
  .virtual("reactionCount")
  // Getter
  .get(function () {
    return reaction.length + 1;
  });

const Thought = model("video", thoughtSchema);

module.exports = Thought;
