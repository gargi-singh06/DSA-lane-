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

    // TRENDING TOPICS
    const allPosts = await Post.find({ level });

 const topicActivity = {};

allPosts.forEach(post => {

  let topic = post.channel;

  if (!topic) return;

  topic = topic.trim().toLowerCase();

  if (
    !topicActivity[topic] ||
    new Date(post.createdAt) >
      new Date(topicActivity[topic])
  ) {
    topicActivity[topic] =
      post.createdAt;
  }
});

    const displayNames = {
  arrays: "Arrays",
  "linked list": "Linked List",
  stack: "Stack",
  queue: "Queue",
  tree: "Tree",
  graph: "Graph",
  hashing: "Hashing",
  heap: "Heap",
  string: "String",
  "binary search": "Binary Search",
  "dynamic programming": "Dynamic Programming",
  greedy: "Greedy",
  recursion: "Recursion & Backtracking",
  "competitive programming": "Competitive Programming",
  cp: "Competitive Programming"
};

const trendingTopics = Object.entries(topicActivity)
  .sort(
    (a, b) =>
      new Date(b[1]) -
      new Date(a[1])
  )
  .slice(0, 6)
  .map(([topic]) =>
    displayNames[topic] || topic
  );

    res.json({
      totalUsers,
      totalPosts,
      userPosts: userPosts.length,
      userUpvotes,
      latestPosts,
      trendingTopics
    });

  } catch (err) {
    console.log(err);

    res.status(500).json({
      error: "Server Error"
    });
  }
});

module.exports = router;
