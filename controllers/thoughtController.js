const Thought = require("../models/Thought");

module.exports = {
  async getThought(req, res) {
    try {
      const users = await Thought.find();
      res.json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async getSingleThought(req, res) {
    try {
      const user = await Thought.findOne({ _id: req.params.thoughtId }).select(
        "-__v"
      );

      if (!user) {
        return res.status(404).json({ message: "No user with that ID" });
      }

      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // create a new thought
  async createThought(req, res) {
    try {
      const dbUserData = await Thought.create(req.body);
      res.json(dbUserData);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  //change thought
  async putThought(req, res) {
    try {
      const result = await User.findOneAndUpdate(
        { id: req.params.thoughtId },
        { thoughtText: req.body.thoughtText },
        { new: true }
      );

      if (!result) {
        return res.status(404).json({ message: "No user with that ID" });
      }

      res.json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // delete thought
  async deleteThought(req, res) {
    try {
      const result = await User.findOneAndDelete({ id: req.params.thoughtId });

      if (!result) {
        return res.status(404).json({ message: "No user with that ID" });
      }

      res.json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // creates new reaction
  async createReaction(req, res) {
    try {
      const dbUserData = await Thought.create(req.body);
      res.json(dbUserData);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  //deletes reaction
  async deleteReaction(req, res) {
    try {
      const result = await Thought.findOneAndDelete({
        id: req.params.reactionId,
      });

      if (!result) {
        return res.status(404).json({ message: "No user with that ID" });
      }

      res.json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
