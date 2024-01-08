const router = require("express").Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  putUser,
  deleteUser,
  createUserFriend,
  deleteUserFriend,
} = require("../../controllers/userController");

// /api/users
router.route("/").get(getUsers).post(createUser);

// /api/users/:userId
router.route("/:userId").get(getSingleUser).put(putUser).delete(deleteUser);

router
  .route("/:userId/friends/:friendId")
  .post(createUserFriend)
  .delete(deleteUserFriend);

module.exports = router;
