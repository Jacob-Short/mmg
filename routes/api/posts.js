// handleing all the posts 

// handle registering users adding users

const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const auth = require("../../middleware/auth");

const Review = require("../../models/Reviews");
const Profile = require("../../models/Profile");
const User = require("../../models/User");

// @route   POST api/posts
// @desc    Create a review
// @access  Private
router.post(
  "/",
  [
    auth,
    [
      check("text", "Text is required").not().isEmpty(),
      check("imbdID", "movieId not present"),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const user = await User.findById(req.user.id).select("-password");
      const newReview = new Review({
        text: req.body.text,
        name: user.name,
        user: req.user.id,
        imdbID: req.body.imdbID,
      });

      const review = await newReview.save();

      res.json(review);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Errors");
    }
  }
);

// @route    GET api/posts
// @desc     Get all posts
// @access   Private
router.get("/", auth, async (req, res) => {
  try {
    const reviews = await Review.find().sort({ date: -1 });
    res.json(reviews);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Errors");
  }
});

// @route    GET api/posts/:id
// @desc     Get post by ID
// @access   Private
router.get("/:id", auth, async (req, res) => {
  try {
    const review = await Review.findById(req.params.id);

    if (!review) {
      return res.status(404).json({ msg: "Review not found" });
    }

    res.json(review);
  } catch (err) {
    console.error(err.message);
    if (err.kind === "ObjectId") {
      return res.status(404).json({ msg: "Review not found" });
    }
    res.status(500).send("Server Errors");
  }
});

// @route   DELETE api/posts
// @desc    Delete a post
// @access  Private
router.delete("/:id", auth, async (req, res) => {
  try {
    const review = await Review.findById(req.params.id);

    if (!review) {
      return res.status(404).json({ msg: "Review not found" });
    }

    if (review.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "User not authorized" });
    }

    await review.remove();

    res.json({ msg: "Review removed" });
  } catch (err) {
    console.error(err.message);
    if (err.kind === "ObjectId") {
      return res.status(404).json({ msg: "Review not found" });
    }
    res.status(500).send("Server Errors");
  }
});

// @route   POST api/posts/like/:id
// @desc    Like a post
// @access  Private

router.put("/like/:id", auth, async (req, res) => {
  try {
    const review = await Review.findById(req.params.id);

    // Check if the post has already
    // been liked by this user
    if (
      review.likes.filter((like) => like.user.toString() === req.user.id)
        .length > 0
    ) {
      return res.status(400).json({ msg: "Post already liked" });
    }

    review.likes.unshift({ user: req.user.id });

    await review.save();

    res.json(review.likes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   POST api/posts/unlike/:id
// @desc    Like a post
// @access  Private

router.put("/unlike/:id", auth, async (req, res) => {
  try {
    const review = await Review.findById(req.params.id);

    // Check if the post has already
    // been liked by this user
    if (
      review.likes.filter((like) => like.user.toString() === req.user.id)
        .length === 0
    ) {
      return res.status(400).json({ msg: "Post has not yet been liked" });
    }

    // Get the remove index

    const removeIndex = review.likes
      .map((like) => like.user.toString())
      .indexOf(req.user.id);

    review.likes.splice(removeIndex, 1);

    await review.save();

    res.json(review.likes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   POST api/posts/comment/:id
// @desc    Comment on a review
// @access  Private
router.post(
  "/comment/:id",
  [auth, [check("text", "Text is required").not().isEmpty()]],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errprs: errors.array() });
    }

    try {
      const user = await User.findById(req.user.id).select("-password");
      const review = await Review.findById(req.params.id);

      const newComment = {
        text: req.body.text,
        name: user.name,
        user: req.user.id,
      };

      review.comments.unshift(newComment);

      await review.save();

      res.json(review.comments);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Errors");
    }
  }
);

// @route    DELETE api/posts/comment/:id/:comment_id
// @desc     Delete comment
// @access   Private

router.delete("/comment/:id/:comment_id", auth, async (req, res) => {
  try {
    const review = await Review.findById(req.params.id);

    // Pull out the comment

    const comment = review.comments.find(
      (comment) => comment.id === req.params.comment_id
    );

    // Makre sure comment exists
    if (!comment) {
      return res.status(404).json({ msg: "Comment does not exist" });
    }

    //Check user
    if (comment.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "User not authorized" });
    }

    const removeIndex = review.likes
      .map((comment) => comment.user.toString())
      .indexOf(req.user.id);

    review.comments.splice(removeIndex, 1);

    await review.save();

    res.json(review.comments);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Errors");
  }
});

module.exports = router;