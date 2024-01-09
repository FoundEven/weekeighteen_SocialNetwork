const router = require("express").Router();
const {
  getThought,
  getSingleThought,
  createThought,
  putThought,
  deleteThought,
  createReaction,
  deleteReaction,
} = require("../../controllers/thoughtController");

// /api/thought
router.route("/").get(getThought).post(createThought);

// /api/users/:thoughtId
router
  .route("/:thoughtId")
  .get(getSingleThought)
  .put(putThought)
  .delete(deleteThought);

router
  .route("/:userId/reactions/:reactionsId")
  .post(createReaction)
  .delete(deleteReaction);

module.exports = router;
