const User = require("../models/User");

module.exports = {
  async getUsers(req, res) {
    try {
      const users = await User.find();
      console.log(users);
      res.json(users);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  async getSingleUser(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.userId }).select(
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
  // create a new user
  async createUser(req, res) {
    try {
      const dbUserData = await User.create(req.body);
      res.json(dbUserData);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // change user
  async putUser(req, res) {
    try {
      const result = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { username: req.body.username },
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
  // delete user
  async deleteUser(req, res) {
    try {
      const result = await User.findOneAndDelete({ _id: req.params.userId });

      if (!result) {
        return res.status(404).json({ message: "No user with that ID" });
      }

      res.json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // creates new friend
  async createUserFriend(req, res) {
    try {
      const dbUserData = await User.create(req.body);
      res.json(dbUserData);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  //deletes friend
  async deleteUserFriend(req, res) {
    try {
      const result = await User.findOneAndDelete({ _id: req.params.friendId });

      if (!result) {
        return res.status(404).json({ message: "No user with that ID" });
      }

      res.json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
