const express = require("express");
const router = express.Router();

const User = require("../models/user");
const Post = require("../models/Post");

router.get("/stats", async (req, res) => {
  try {
    const totalUsers = await User.countDocuments();

    const totalPosts = await Post.countDocuments();

    const beginnerPosts =
      await Post.countDocuments({
        level: "beginner",
      });

    const intermediatePosts =
      await Post.countDocuments({
        level: "intermediate",
      });

    const advancedPosts =
      await Post.countDocuments({
        level: "advanced",
      });

    res.json({
      totalUsers,
      totalPosts,
      beginnerPosts,
      intermediatePosts,
      advancedPosts,
    });

  } catch (err) {
    console.log(err);

    res.status(500).json({
      error: "Server Error",
    });
  }
});

module.exports = router;
