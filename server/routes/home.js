const express = require("express");
const router = express.Router();

const User = require("../models/user");
const Post = require("../models/Post");

router.get("/:level/:username", async (req, res) => {
  try {

    const { level, username } = req.params;

    const totalUsers = await User.countDocuments();

    const totalPosts = await Post.countDocuments({
      level
    });

    const userPosts = await Post.find({
      author: username,
      level
    });

    const userUpvotes = userPosts.reduce(
      (sum, post) => sum + post.upvotes,
      0
    );

    const latestPosts = await Post.find({
      level
    })
      .sort({ createdAt: -1 })
      .limit(5);

    res.json({
      totalUsers,
      totalPosts,
      userPosts: userPosts.length,
      userUpvotes,
      latestPosts
    });

  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: "Server Error"
    });
  }
});

module.exports = router;
