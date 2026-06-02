import {
  FaTrophy,
  FaUsers,
  FaComments,
  FaThumbsUp,
  FaFire,
  FaChartLine,
  FaArrowUp, FaBolt,
} from "react-icons/fa";

function IntermediateHome() {
  const username = localStorage.getItem("username");

  return (
    <div className="dashboard-home">

      {/* HEADER */}
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
  <h2>24</h2>
  <p>Discussions</p>
</div>

        <div className="stat-card">
  <FaThumbsUp className="stat-icon" />
  <h2>24</h2>
  <p>Upvotes</p>
</div>

        <div className="stat-card">
  <FaUsers className="stat-icon" />
  <h2>24</h2>
  <p>Community Members</p>
</div>

        <div className="stat-card">
  <FaFire className="stat-icon" />
  <h2>24</h2>
  <p>Day Streak</p>
  </div>
</div>

      {/* MAIN DASHBOARD */}
      <div className="dashboard-grid">

        {/* LEADERBOARD */}
 <div className="dashboard-card leaderboard-card">
  <h2>
    <FaTrophy /> Leaderboard
  </h2>

 <div className="leader-item rank1">
  <span>#1 Rahul Sharma</span>
  <strong>980 pts</strong>
</div>

<div className="leader-item rank2">
  <span>#2 Priya Gupta</span>
  <strong>920 pts</strong>
</div>

<div className="leader-item rank3">
  <span>#3 Amit Kumar</span>
  <strong>870 pts</strong>
</div>

<div className="leader-item current-user">
  <span>#4 {username}</span>
  <strong>820 pts</strong>
</div>
</div>
</div>

        {/* RECENT ACTIVITY */}
       <div className="dashboard-card">
  <h2>
    <FaChartLine /> Recent Activity
  </h2>

  <div className="activity-item">
    Posted a question in Arrays
  </div>

  <div className="activity-item">
    Earned 5 Upvotes
  </div>

  <div className="activity-item">
    Replied to Graphs Discussion
  </div>
</div>

        {/* CONTRIBUTION */}
 <div className="dashboard-card">
  <h2>
    <FaThumbsUp /> Contribution Summary
  </h2>

  <div className="contribution-row">
    <span>Questions Posted</span>
    <strong>18</strong>
  </div>

  <div className="contribution-row">
    <span>Answers Given</span>
    <strong>32</strong>
  </div>

  <div className="contribution-row">
    <span>Upvotes Earned</span>
    <strong>76</strong>
  </div>
</div>

        {/* POPULAR TOPICS */}
        <div className="dashboard-card">
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
  );
}

export default IntermediateHome;
