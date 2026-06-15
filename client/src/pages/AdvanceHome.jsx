import {
  FaTrophy,
  FaUsers,
  FaComments,
  FaThumbsUp,
  FaFire,
  FaChartLine,
  FaBolt,
} from "react-icons/fa";

import { useEffect, useState } from "react";

function AdvanceHome() {
  const username = localStorage.getItem("username");

  const [stats, setStats] = useState({
    totalUsers: 0,
    totalPosts: 0,
    userPosts: 0,
    userUpvotes: 0,
    latestPosts: [],
  });

  const [leaders, setLeaders] = useState([]);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await fetch(
          `http://localhost:3000/api/home/Advanced/${username}`
        );

        const data = await res.json();

        setStats(data);
      } catch (err) {
        console.log(err);
      }
    };

    const fetchLeaderboard = async () => {
      try {
        const res = await fetch(
          "http://localhost:3000/leaderboard"
        );

        const data = await res.json();

        setLeaders(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchStats();
    fetchLeaderboard();
  }, [username]);

  return (
    <div className="dashboard-home">

      {/* HERO */}
      <div className="home-hero">
        <div>
          <h1>Welcome Back, {username}</h1>

          <p>
            Continue solving problems, contributing solutions,
            and climbing the leaderboard.
          </p>
        </div>
      </div>

      {/* STATS */}
      <div className="stats-grid">

        <div className="stat-card">
          <FaComments className="stat-icon" />
          <h2>{stats.totalPosts}</h2>
          <p>Discussions</p>
        </div>

        <div className="stat-card">
          <FaThumbsUp className="stat-icon" />
          <h2>{stats.userUpvotes}</h2>
          <p>Upvotes</p>
        </div>

        <div className="stat-card">
          <FaUsers className="stat-icon" />
          <h2>{stats.totalUsers}</h2>
          <p>Community Members</p>
        </div>

        <div className="stat-card">
          <FaFire className="stat-icon" />
          <h2>{stats.userPosts}</h2>
          <p>Your Posts</p>
        </div>

      </div>

      {/* DASHBOARD GRID */}
      <div className="dashboard-grid">

        {/* LEADERBOARD */}
        <div className="dashboard-card leaderboard-card">

          <h2>
            <FaTrophy /> Leaderboard
          </h2>

          {leaders.length === 0 ? (
            <p>No leaderboard data</p>
          ) : (
            Array.isArray(leaders) &&
  leaders.slice(0, 10).map((user, index) => (
              <div
                key={user._id}
                className={`leader-item ${
                  index === 0
                    ? "rank1"
                    : index === 1
                    ? "rank2"
                    : index === 2
                    ? "rank3"
                    : ""
                }`}
              >
                <span>
                  #{index + 1} {user.username}
                </span>

                <strong>
                  {user.rating}
                </strong>
              </div>
            ))
          )}

        </div>

        {/* RECENT ACTIVITY */}
        <div className="dashboard-card activity-card">

          <h2>
            <FaChartLine /> Recent Activity
          </h2>

          {stats.latestPosts.length === 0 ? (
            <div className="activity-item">
              No recent activity
            </div>
          ) : (
            stats.latestPosts.map((post) => (
              <div
                key={post._id}
                className="activity-item"
              >
                {post.title}
              </div>
            ))
          )}

        </div>

        {/* CONTRIBUTION SUMMARY */}
        <div className="dashboard-card contribution-card">

          <h2>
            <FaThumbsUp /> Contribution Summary
          </h2>

          <div className="contribution-row">
            <span>Questions Posted</span>
            <strong>{stats.userPosts}</strong>
          </div>

          <div className="contribution-row">
            <span>Upvotes Earned</span>
            <strong>{stats.userUpvotes}</strong>
          </div>

          <div className="contribution-row">
            <span>Total Discussions</span>
            <strong>{stats.totalPosts}</strong>
          </div>

        </div>

        {/* TRENDING TOPICS */}
        <div className="dashboard-card trending-card">

          <h2>
            <FaBolt /> Trending Topics
          </h2>

          <div className="topics-grid">
            <span className="topic-chip">Arrays</span>
            <span className="topic-chip">DP</span>
            <span className="topic-chip">Graphs</span>
            <span className="topic-chip">Trees</span>
            <span className="topic-chip">Greedy</span>
            <span className="topic-chip">Linked List</span>
          </div>

        </div>

      </div>
    </div>
  );
}

export default AdvanceHome;
